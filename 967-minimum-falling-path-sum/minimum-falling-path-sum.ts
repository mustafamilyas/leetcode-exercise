function minFallingPathSum(matrix: number[][]): number {
    let min = Number.MAX_SAFE_INTEGER;
    for(let i = 0; i < matrix.length; i++) {
        for(let k = 0; k < matrix[i].length; k++) {
            if(i > 0)
                matrix[i][k] += Math.min(
                    (matrix[i - 1]?.[k - 1] ?? Number.MAX_SAFE_INTEGER), 
                    matrix[i - 1][k], 
                    (matrix[i - 1]?.[k + 1] ?? Number.MAX_SAFE_INTEGER
                ))
            if(i === matrix.length - 1) min = Math.min(matrix[i][k], min)
        }
    }
    return min
};