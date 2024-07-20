function restoreMatrix(rowSum: number[], colSum: number[]): number[][] {
    const result = new Array(rowSum.length).fill(null).map(()=>new Array(colSum.length).fill(0))
    const curRowSum = new Array(rowSum.length).fill(0);
    const curColSum = new Array(colSum.length).fill(0);
    backtrack(0, 0);
    return result;
    // ============================== UTILS ==============================
    function backtrack(row: number, col: number): boolean {
        if(row === rowSum.length) return true;
        const maxRowNum = rowSum[row] - curRowSum[row]
        const maxColNum = colSum[col] - curColSum[col]
        if(col === colSum.length - 1 && maxRowNum >  maxColNum) return false;
        if(row === rowSum.length - 1 && maxColNum >  maxRowNum) return false;
        const maxAvailableNum = Math.min(maxRowNum, maxColNum)
        let nextCol = col + 1, nextRow = row;
        if(nextCol === colSum.length) {
            nextCol = 0;
            nextRow++
        }
        for(let num = maxAvailableNum; num >= 0; num--) {
            result[row][col] = num;
            curRowSum[row] += num
            curColSum[col] += num
            if(backtrack(nextRow, nextCol)) return true;
            result[row][col] = 0
            curRowSum[row] -= num
            curColSum[col] -= num
        }
        return false;
    }
};
