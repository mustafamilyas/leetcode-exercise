function minFallingPathSum(matrix: number[][]): number {
    for(let i = 1; i < matrix.length; i++) {
        for(let k = 0; k < matrix[i].length; k++) {
            matrix[i][k] += Math.min(
                (matrix[i - 1]?.[k - 1] ?? Number.MAX_SAFE_INTEGER), 
                matrix[i - 1][k], 
                (matrix[i - 1]?.[k + 1] ?? Number.MAX_SAFE_INTEGER
            ))
        }
    }
    return Math.min(...matrix[matrix.length - 1])
};