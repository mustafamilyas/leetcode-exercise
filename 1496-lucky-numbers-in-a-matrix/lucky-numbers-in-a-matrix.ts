function luckyNumbers (matrix: number[][]): number[] {
    const maxColumn = new Array(matrix[0].length).fill(Number.MIN_SAFE_INTEGER);
    const minRow = new Array(matrix.length).fill(Number.MAX_SAFE_INTEGER);

    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            minRow[i] = Math.min(minRow[i], matrix[i][j])
            maxColumn[j] = Math.max(maxColumn[j], matrix[i][j])
        }
    }
    const minRowSet = new Set(minRow)
    const result = []
    for(const max of maxColumn) {
        if(minRowSet.has(max)) {
            result.push(max)
        }
    }
    return result;
};