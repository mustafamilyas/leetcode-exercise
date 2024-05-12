function largestLocal(grid: number[][]): number[][] {
    let windowSize = 3;
    let reduceArray = [];

    for (let x = 0; x < grid.length - windowSize  + 1; x++){
        reduceArray.push([]);
        for (let y = 0; y < grid.length - windowSize  + 1; y++){
            let maxValue = Number.MIN_SAFE_INTEGER;
            for(let i = x;  i < x + 3; i++){
                for(let j = y;  j < y + 3; j++){
                    maxValue = Math.max(maxValue, grid[i][j]);
                }
            }
            reduceArray[reduceArray.length - 1].push(maxValue);
        }
    }

    return reduceArray;
};