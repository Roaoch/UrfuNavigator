async function getShortestPath(inst, startName, endName) {
    const result = await fetch(`/path?inst=${inst}&start=${startName}&end=${endName}`);
    return result.json();
}

export { getShortestPath };