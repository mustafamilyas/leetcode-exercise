function maxEqualRowsAfterFlips(matrix: number[][]): number {
    const counter: Record<string, number> = {}
    for(let i = 0; i < matrix.length; i++) {
        const isInverse = !matrix[i][0]
        let key = '';
        for(let k = 0; k < matrix[0].length; k++) {
            key += isInverse ? matrix[i][k] ? 0 : 1 : matrix[i][k]
        }
        if(counter[key]) counter[key]++
        else counter[key] = 1
    }
    return Object.values(counter).reduce((acc, cur)=>Math.max(acc, cur), 1)
};