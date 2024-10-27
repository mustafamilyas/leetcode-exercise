function countSquares(matrix: number[][]): number {
    const m = matrix.length, n = matrix[0].length;
    let sum = 0;
    for(let i = 0; i < m; i++) {
        for(let k = 0; k < n; k++) {
            if(matrix[i][k] > 0) {
                sum += matrix[i][k] = Math.min(
                    matrix?.[i - 1]?.[k] ?? 0, 
                    matrix?.[i]?.[k - 1] ?? 0, 
                    matrix?.[i - 1]?.[k - 1] ?? 0
                ) + 1
            }
        }
    }
    return sum
};