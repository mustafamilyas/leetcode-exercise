const mod = 10 ** 9 + 7;

function numberOfPaths(grid: number[][], k: number): number {
    const m = grid.length;
    const n = grid[0].length;
    let prev = createEmptyCache(n, k);
    let next = createEmptyCache(n, k);
    next[0][grid[0][0] % k]++;
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            const topCache = prev[j];
            const leftCache = next[j - 1] ?? new Array(k).fill(0);
            for(let x = 0; x < k; x++) {
                const nextIdx = (grid[i][j] + x) % k;
                next[j][nextIdx] = (next[j][nextIdx] + topCache[x]) % mod;
                next[j][nextIdx] = (next[j][nextIdx] + leftCache[x]) % mod;
                  
            }
        }
        prev = next;
        next = createEmptyCache(n, k);
    }
    return prev[n - 1][0];
};

function createEmptyCache(n: number, k: number): number[][] {
    return Array.from({ length: n }, () => new Array(k).fill(0));
}
/*
5
0 1 2 3 4
12
0 1 2 3 4 5 6 7 8 9 10 11

 */