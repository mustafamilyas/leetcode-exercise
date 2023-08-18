function maximalNetworkRank(n: number, roads: number[][]): number {
    const adjacentMap = new Array(n).fill(null).map(()=>new Set());
    for(const [from, to] of roads) {
        adjacentMap[from].add(to)
        adjacentMap[to].add(from);
    }
    let max = 0;
    for(let i = 0; i < n; i++) {
        for(let j = i + 1; j < n; j++) {
            let connected = adjacentMap[i].size + adjacentMap[j].size
            if(adjacentMap[i].has(j)) {
                connected--
            }
            max = Math.max(connected, max)
        }
    }
    return max;
};