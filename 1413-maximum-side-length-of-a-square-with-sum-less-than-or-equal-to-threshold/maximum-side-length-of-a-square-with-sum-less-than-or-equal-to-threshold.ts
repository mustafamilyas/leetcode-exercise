function maxSideLength(mat: number[][], threshold: number): number {
    const m = mat.length;
    const n = mat[0].length;
    const prefixSum = Array.from({ length: m }, () => new Array(n).fill(0));
    let max = 0;
    initCacheSum();
    for(let row = 0; row < m; row++) {
        let maxSize = m - row;
        for(let col = 0; col < n; col++) {
            maxSize = Math.min(maxSize, n - col);
            let startSize = Math.max(max, 1);
            for(let size = maxSize; size >= startSize; size--) {
                if(isMagicSquare(row, col, size)) {
                    max = Math.max(max, size)
                    break;
                }
            }

        }
    }
    return max;

    function isMagicSquare(topRow: number, leftCol: number, size: number) {
        const bottomRow = topRow + size - 1;
        const rightCol = leftCol + size - 1;
        const leftArea = leftCol == 0 ? 0:  prefixSum[bottomRow][leftCol - 1];
        const topArea = topRow == 0 ? 0: prefixSum[topRow - 1][rightCol];
        const topLeftArea = leftCol == 0 || topRow == 0 ? 0 : prefixSum[topRow - 1][leftCol - 1];
        const area = prefixSum[bottomRow][rightCol] - leftArea - topArea + topLeftArea;
        return area <= threshold;
    }

    function initCacheSum() {
        for(let row = 0; row < m; row++) {
            for(let col = 0; col < n; col++) {
                const leftArea = col == 0 ? 0 : prefixSum[row][col - 1];
                const topArea = row == 0 ? 0 : prefixSum[row - 1][col];
                const topLeftArea = row == 0 || col == 0 ? 0 : prefixSum[row - 1][col - 1];
                prefixSum[row][col] = leftArea + topArea - topLeftArea + mat[row][col]
            }
        }
    }
};