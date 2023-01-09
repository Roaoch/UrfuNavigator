const createGraph = require('ngraph.graph');
const paths = require('ngraph.path');
const institut = require('./models.js');

async function getPath(instId, startName, endName) {
    const result = await institut.model.findOne( {id: instId})
        .then(inst => {
            const start = getByName(inst.flors, startName);
            const end = getByName(inst.flors, endName);

            if (!end) {
                return
            }
            else if (start.floor === end.floor) {
                return searchPath(getById(inst.flors, Number(start.floor)).points, start.point.id, [end.point.id]).reverse();
            }
            else if (!start) {
                return undefined
            }
            
            const avStairs = inst.stairs
                .filter(el => {
                    const stairsPoints = el.stairPoints.map(point => point.id);
                    return stairsPoints.indexOf(start.floor) !== -1 && stairsPoints.indexOf(end.floor) !== -1
                })
                .map(el => {
                    return {
                        id: el.id,
                        startFloor: getById(el.stairPoints, start.floor).point,
                        endFloor: getById(el.stairPoints, end.floor).point
                    };
                });
            const startPart = searchPath(
                getById(inst.flors, Number(start.floor)).points, 
                start.point.id, 
                avStairs.map(el => el.startFloor)
            ).reverse();
            const stairEnd = startPart[startPart.length - 1];
            const endPart = searchPath(
                getById(inst.flors, Number(end.floor)).points,
                getById(getById(inst.stairs, stairEnd.floorId).stairPoints, end.floor).point,
                [end.point.id]
            ).reverse();

            return [startPart, endPart];
        })
        .catch(err => console.log(err));
    return result;
}

function getByName(floors, name) {
    for (floor of floors) {
        const point = floor.points.find(el => el.name === name);
        if (point) {
            return {
                floor: floor.id, 
                point: point
            };
        }
        
    }
}

function searchPath(points, start, end) {
    const graph = createGraph();

    points.forEach(point => {
        point.renderlinks.forEach(link => graph.addLink(point.id, link.id, link.length));
    })
    const pathFinder = paths.aStar(graph, {
        distance(fromNode, toNode, link) {
            return link.data.weight;
        }
    });
    const thisPaths = end
        .map(el => pathFinder.find(start, el))
        .sort((a, b) => sum(a) - sum(b));
    return thisPaths[0].map(el => getById(points, el.id));;
}

function sum(a) {
    return a.reduce((a, b) => a + b.links.data, 0)
}

function getById(coll, id) {
    return coll.find(el => el.id === id);
}

module.exports = getPath;