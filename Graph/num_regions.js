function numRegions(graph) {
    let visited = new Set();
    let regions = 0;

    for (let node in graph) {
        if (isNewRegion(node, graph, visited)) regions++;
    }

    return regions;
}