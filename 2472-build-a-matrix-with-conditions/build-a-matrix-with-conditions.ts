function buildMatrix(k: number, rowConditions: number[][], colConditions: number[][]): number[][] {
    const result = new Array(k).fill(0).map(()=>new Array(k).fill(0))
    const row = toposort(rowConditions, k)
    const col = toposort(colConditions, k)
    if(row.length !== k || col.length !== k) return []
    const pos = new Array(k).fill(null).map(()=>[-1, -1])
    for(let i = 0; i < k; i++) {
        pos[row[i] - 1][0] = i
        pos[col[i] - 1][1] = i
    }
    for(let i = 0; i < k; i++) {
        const [x, y] = pos[i]
        result[x][y] = i + 1
    }
    return result;
};

function toposort(edges: number[][], k: number) {
    const adjacentMap: Record<number, number[]> = {}
    const indegree = new Array(k).fill(0)
    for(const [from, to] of edges) {
        if(!adjacentMap[from]) adjacentMap[from] = [to]
        else adjacentMap[from].push(to)

        indegree[to - 1]++
    }
    const queue = []
    for(let i = 0; i < k; i++) {
        if(indegree[i] === 0) queue.push(i + 1) 
    }
    const order = []
    while(queue.length) {
        const cur = queue.shift();
        order.push(cur)
        const nextNode = adjacentMap[cur] ?? []
        for(const next of nextNode) {
            if(--indegree[next - 1] === 0) {
                queue.push(next)
            }
        }
    }
    return order;
}