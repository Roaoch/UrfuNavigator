async function getShortestPath(inst, startName, endName) {
    const response = await fetch(`/path?inst=${inst}&start=${startName}&end=${endName}`);
    const result = response.json();
    return result;
}

export { getShortestPath };