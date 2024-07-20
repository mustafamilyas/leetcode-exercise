function restoreMatrix(rowSum: number[], colSum: number[]): number[][] {
    const result = new Array(rowSum.length).fill(null).map(()=>new Array(colSum.length).fill(0))
    for(let i = 0; i < rowSum.length; i++) {
        for(let k = 0; k < colSum.length; k++) {
            const maxValue = Math.min(rowSum[i], colSum[k]);
            result[i][k] = maxValue;
            rowSum[i] -= maxValue;
            colSum[k] -= maxValue;
        }
    }
    return result;
};
