function minCost(n: number, edges: number[][]): number {
    const adjacent: Array<Map<number, number>> = Array.from({ length: n }, () => new Map());
    const minQueue = new MinPriorityQueue<number[]>((value) => value[1]); 
    const seen = new Set<number>();
    const costVisit = new Array(n).fill(Number.MAX_SAFE_INTEGER);
    for(const [u, v, w] of edges) {
        adjacent[u].set(v, Math.min(w, adjacent[u].get(v) ?? Number.MAX_SAFE_INTEGER));
        adjacent[v].set(u, Math.min(w * 2, adjacent[v].get(u) ?? Number.MAX_SAFE_INTEGER));
    }
    minQueue.enqueue([0, 0]);
    costVisit[0] = 0;
    while(minQueue.size() > 0) {
        const [cur, weight] = minQueue.dequeue();
        if(seen.has(cur)) continue;
        seen.add(cur)
        const next = adjacent[cur];
        for(const [target, targetWeight] of next.entries()) {
            const curWeight = costVisit[target] = Math.min(costVisit[target], weight + targetWeight);
            minQueue.enqueue([target, curWeight])
        }
    }
    return costVisit[n - 1] == Number.MAX_SAFE_INTEGER ? -1 : costVisit[n - 1]
};