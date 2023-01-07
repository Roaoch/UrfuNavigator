const createGraph = require('ngraph.graph');
const paths = require('ngraph.path');
const institut = require('./models.js');

async function getPath(instId, startFloor, startId, endId) {
    const result = await institut.model.findOne( {id: instId})
        .then(inst => {
            return searchPath(getById(inst.flors, startFloor).points, startId, endId).reverse();
        });
    return result;
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