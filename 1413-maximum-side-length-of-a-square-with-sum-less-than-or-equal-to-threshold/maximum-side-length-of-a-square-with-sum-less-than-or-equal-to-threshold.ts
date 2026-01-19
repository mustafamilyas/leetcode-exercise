function maxSideLength(mat: number[][], threshold: number): number {
    const m = mat.length;
    const n = mat[0].length;
    const horizontalSum = Array.from({ length: m }, () => new Array(n).fill(0));
    let max = 0;
    initCacheSum();
    for(let row = 0; row < m; row++) {
        let maxSize = m - row;
        for(let col = 0; col < n; col++) {
            maxSize = Math.min(maxSize, n - col);
            let startSize = Math.max(max, 1);
            for(let size = startSize; size <= maxSize; size++) {
                if(isMagicSquare(row, col, size)) {
                    max = Math.max(max, size)
                }
            }

        }
    }
    return max;

    function isMagicSquare(topRow: number, leftCol: number, size: number) {
        const bottomRow = topRow + size - 1;
        const rightCol = leftCol + size - 1;
        let sum = 0;
        for(let row = topRow; row <= bottomRow; row++) {
            sum += horizontalSum[row][rightCol] - (leftCol == 0 ? 0 : horizontalSum[row][leftCol - 1]);
            if(sum > threshold) return false;
        }
        return true;
    }

    function initCacheSum() {
        for(let row = 0; row < m; row++) {
            for(let col = 0; col < n; col++) {
                const prevH = col == 0 ? 0 : horizontalSum[row][col - 1];
                horizontalSum[row][col] = prevH + mat[row][col]
            }
        }
    }
};