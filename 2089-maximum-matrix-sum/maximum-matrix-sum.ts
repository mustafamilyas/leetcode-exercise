function maxMatrixSum(matrix: number[][]): number {
    let sum = 0, isEvenNegCount = true, smallestPos = Number.MAX_SAFE_INTEGER;
    for(let i = 0; i < matrix.length; i++) {
        for(let k = 0; k < matrix[0].length; k++) {
            if(matrix[i][k] < 0) isEvenNegCount = !isEvenNegCount
            const absValue = Math.abs(matrix[i][k])
            sum += absValue;
            smallestPos = Math.min(smallestPos, absValue)
        }
    }
    return isEvenNegCount ? sum : sum - (2 * smallestPos)
};