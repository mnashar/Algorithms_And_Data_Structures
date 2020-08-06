function buildGraph(edges) {
    let graph = {}
    edges.forEach((edge) => {
        let [dest, src] = edge.map(String);
        if (dest in graph) {
            graph[dest].push(src);
        } else {
            graph[dest] = [src];
        }

        if (!(src in graph)) {
            graph[src] = [];
        }
    });

    return graph;
}