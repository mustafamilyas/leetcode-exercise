function uniquePathsIII(grid: number[][]): number {
    const rowLength = grid.length;
    const colLength = grid[0].length;
    let total = rowLength * colLength;
    let start = [0,0];
    let end = [0,0];

    for(let i = 0; i < rowLength; i++) {
        for(let j = 0; j < colLength; j++) {
            switch(grid[i][j]) {
                case 1:
                    start = [i, j];
                    break;
                case 2:
                    end = [i, j];
                    break;
                case -1:
                    total--
            }
        }
    }

    let result = 0;
    let cacheResult = new Set<string>();

    function backtrack(cacheSet: Set<string>, row: number, col: number) {
        if(cacheSet.size === total) {
            const resultKey = Array.from(cacheSet).join(':');
            if(!cacheResult.has(resultKey)){
                result++;
                cacheResult.add(resultKey)
            }
            return;
        }

        const key = `${row},${col}`

        if(
            grid?.[row]?.[col] === undefined || 
            grid[row][col] === -1 || 
            cacheSet.has(key) ||
            (row === end[0] && col === end[1] && cacheSet.size < total - 1)
        ) {
            return;
        }
        cacheSet.add(key);
        backtrack(cacheSet, row + 1, col);
        backtrack(cacheSet, row, col + 1);
        backtrack(cacheSet, row - 1, col);
        backtrack(cacheSet, row, col - 1);
        cacheSet.delete(key)
    }

    backtrack(new Set<string>(), start[0], start[1])

    return result;
};