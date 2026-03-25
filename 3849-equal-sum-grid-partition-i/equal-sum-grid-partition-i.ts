function canPartitionGrid(grid: number[][]): boolean {
    const m = grid.length, n = grid[0].length;
    const sumHorizontal = new Array(m).fill(0);
    const sumVertical = new Array(n).fill(0);
    let sumAll = 0;
    for(let i = 0; i < m; i++) {
        for(let k = 0; k < n; k++) {
            sumHorizontal[i] += grid[i][k]
            sumVertical[k] += grid[i][k]
            sumAll += grid[i][k];
        }
    }
    let curSum = 0;
    for(let i = 0; i < m - 1; i++) {
        curSum += sumHorizontal[i];
        const counter = sumAll - curSum;
        if(curSum == counter) return true;
    }
    curSum = 0;
    for(let i = 0; i < n - 1; i++) {
        curSum += sumVertical[i];
        const counter = sumAll - curSum;
        if(curSum == counter) return true;
    }
    return false;
};