function getBiggestThree(grid: number[][]): number[] {
    const rombusMVPQueue = new MaxPriorityQueue();
    const m = grid.length;
    const n = grid[0].length;
    const leftDiaPrefixSum = Array.from({ length: m }, () => new Array(n));
    const rightDiaPrefixSum = Array.from({ length: m }, () => new Array(n));
    initPrefixSum()
    for(let i = 0; i < m; i++) {
        for(let k = 0; k < n; k++) {
            const e = Math.min(i, m - i - 1, Math.floor((n - k - 1) / 2));
            rombusMVPQueue.enqueue(grid[i][k]);
            for(let s = 1; s <= e; s++) {
                const midX = k + s;
                const topY = i - s;
                const botY = i + s;
                const eX = k + 2 * s; 
                const topLeft = leftDiaPrefixSum[i][eX] - leftDiaPrefixSum[topY][midX];
                const topRight = rightDiaPrefixSum[i][k] - rightDiaPrefixSum[topY][midX];
                const bottomLeft = leftDiaPrefixSum[botY][midX] - leftDiaPrefixSum[i][k];
                const bottomRight = rightDiaPrefixSum[botY][midX] - rightDiaPrefixSum[i][eX];
                const diffSum = grid[topY][midX] - grid[botY][midX];
                rombusMVPQueue.enqueue(diffSum + topLeft + topRight + bottomLeft + bottomRight);
            }
        }
    }
    const set = new Set<number>();
    while(set.size < 3 && !rombusMVPQueue.isEmpty()) {
        set.add(rombusMVPQueue.dequeue() as number)
    }
    return Array.from(set);

    function initPrefixSum() {
        for(let i = 0; i < n; i++) {
            leftDiaPrefixSum[0][i] = grid[0][i]
            rightDiaPrefixSum[0][i] = grid[0][i]
        }
        for(let i = 1; i < m; i++) {
            leftDiaPrefixSum[i][0] = grid[i][0]
            rightDiaPrefixSum[i][n - 1] = grid[i][n - 1]
        }
        for(let i = 1; i < m; i++) {
            for(let k = 1; k < n; k++) {
                leftDiaPrefixSum[i][k] = leftDiaPrefixSum[i - 1][k - 1] + grid[i][k]
                rightDiaPrefixSum[i][n - k - 1] = rightDiaPrefixSum[i - 1][n - k] + grid[i][n - 1 - k]
            }
        }
    } 
};