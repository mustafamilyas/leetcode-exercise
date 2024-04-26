function minFallingPathSum(grid: number[][]): number {
    if(grid.length <= 1) return Math.min(...grid[0])
    let prevMin = createMinLeftRight(grid[0]);
    let cur = [...grid[0]];
    for(let i = 1; i < grid.length; i++) {
        cur = cur.map((_, idx)=>grid[i][idx] + Math.min(prevMin.minLeft[idx], prevMin.minRight[idx]))
        prevMin = createMinLeftRight(cur)
    }
    return Math.min(...cur);

    function createMinLeftRight(row: number[]) {
        const minLeft = new Array(grid[0].length).fill(Infinity);
        const minRight = new Array(grid[0].length).fill(Infinity);
        for(let j = 1; j < row.length; j++) {
            minLeft[j] = Math.min(minLeft[j - 1], row[j - 1])
        }
        for(let j = row.length - 2; j >= 0; j--) {
            minRight[j] = Math.min(minRight[j + 1], row[j + 1])
        }
        return {
            minLeft,
            minRight
        }
    }
};