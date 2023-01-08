const createGraph = require('ngraph.graph');
const paths = require('ngraph.path');
const institut = require('./models.js');

async function getPath(instId, startName, endName) {
    const result = await institut.model.findOne( {id: instId})
        .then(inst => {
            const start = getByName(inst.flors, startName);
            const end = getByName(inst.flors, endName);

            if (start.floor === end.floor) {
                return searchPath(getById(inst.flors, Number(start.floor)).points, start.point.id, end.point.id).reverse();
            }
            else {
                return undefined;
            }
        });
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
    return pathFinder.find(start, end).map(el => getById(points, el.id));
}

function getById(coll, id) {
    return coll.find(el => el.id === id);
}

module.exports = getPath;