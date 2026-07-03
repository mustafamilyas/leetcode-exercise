function findMaxPathScore(edges: number[][], online: boolean[], k: number): number {
    const n = online.length;

    const adj: [number, number][][] = Array.from({ length: n }, () => []);
    const indeg = Array(n).fill(0);

    let maxCost = 0;

    for (const [u, v, cost] of edges) {
        if (!online[u] || !online[v]) continue;

        adj[u].push([v, cost]);
        indeg[v]++;
        maxCost = Math.max(maxCost, cost);
    }

    // Topological sort once
    const topo: number[] = [];
    const queue: number[] = [];

    for (let i = 0; i < n; i++) {
        if (indeg[i] === 0) queue.push(i);
    }

    let head = 0;
    while (head < queue.length) {
        const u = queue[head++];
        topo.push(u);

        for (const [v] of adj[u]) {
            indeg[v]--;
            if (indeg[v] === 0) queue.push(v);
        }
    }

    function can(minScore: number): boolean {
        const dist = Array(n).fill(Infinity);
        dist[0] = 0;

        for (const u of topo) {
            if (dist[u] > k) continue;

            for (const [v, cost] of adj[u]) {
                if (cost < minScore) continue;

                const next = dist[u] + cost;
                if (next < dist[v]) {
                    dist[v] = next;
                }
            }
        }

        return dist[n - 1] <= k;
    }

    let left = 0;
    let right = maxCost;
    let ans = -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (can(mid)) {
            ans = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return ans;
}