function maxIncreaseKeepingSkyline(grid: number[][]): number {
    const maxHorizontal = new Array(grid.length).fill(0);
    const maxVertical = new Array(grid.length).fill(0);
    let increase = 0;
    for(let i = 0; i < grid.length; i++) {
        for(let k = 0; k < grid.length; k++) {
            maxHorizontal[i] = Math.max(maxHorizontal[i], grid[i][k])
            maxVertical[k] = Math.max(maxVertical[k], grid[i][k])
        }
    }

    for(let i = 0; i < grid.length; i++) {
        for(let k = 0; k < grid.length; k++) {
            increase += Math.min(maxHorizontal[i], maxVertical[k]) - grid[i][k]
        }
    }
    return increase;
};