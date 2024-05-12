let windowSize = 3;

function largestLocal(grid: number[][]): number[][] {
    const n = grid.length;
    const result = [];
    for (let x = 0; x < n - windowSize + 1; x++){
        result.push([]);
        for (let y = 0; y < n - windowSize + 1; y++){
            let maxValue = Number.MIN_SAFE_INTEGER;
            for(let i = x;  i < x + windowSize; i++){
                for(let j = y;  j < y + windowSize; j++){
                    maxValue = Math.max(maxValue, grid[i][j]);
                }
            }
            result[result.length - 1].push(maxValue);
        }
    }

    return result;
};