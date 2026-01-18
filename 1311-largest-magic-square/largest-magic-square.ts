function largestMagicSquare(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    const verticalSum = Array.from({ length: n }, () => new Array(m).fill(0));
    const horizontalSum = Array.from({ length: m }, () => new Array(n).fill(0));
    initCacheSum();
    let max = 1;
    
    for(let row = 0; row < m; row++) {
        for(let col = 0; col < n - 1; col++) {
            for(let right = col + 1; right < n; right++) {
                if(isMagicSquare(row, col, right)) {
                    max = Math.max(max, right - col + 1)
                }
            }

        }
    }

    return max;

    function isMagicSquare(topRow: number, leftCol: number, rightCol: number) {
        const size = rightCol - leftCol + 1;
        const bottomRow = topRow + rightCol - leftCol;
        if(bottomRow >= m) return false;
        const magicNumber = horizontalSum[topRow][rightCol] - (leftCol == 0 ? 0 : horizontalSum[topRow][leftCol - 1]);
        // check vertical
        for(let col = leftCol; col <= rightCol; col++) {
            const curMagicNumber = verticalSum[col][bottomRow] - (topRow == 0 ? 0 : verticalSum[col][topRow - 1]);
            if(magicNumber !== curMagicNumber) return false;
        }
        // check horizontal
        for(let row = topRow + 1; row <= bottomRow; row++) {
            const curMagicNumber = horizontalSum[row][rightCol] - (leftCol == 0 ? 0 : horizontalSum[row][leftCol - 1]);
            if(magicNumber !== curMagicNumber) return false;
        }
        // check horizontal
        let leftDia = 0, rightDia = 0;
        for(let i = 0; i < size; i++) {
            leftDia += grid[topRow + i][leftCol++]
            rightDia += grid[topRow + i][rightCol--]
        }
        if(magicNumber !== leftDia || magicNumber !== rightDia) return false;
        return true;
    }

    function initCacheSum() {
        for(let col = 0; col < n; col++) {
            for(let row = 0; row < m; row++) {
                const prev = row == 0 ? 0 : verticalSum[col][row - 1]
                verticalSum[col][row] = prev + grid[row][col]
                
            }
        }
        for(let row = 0; row < m; row++) {
            for(let col = 0; col < n; col++) {
                const prevH = col == 0 ? 0 : horizontalSum[row][col - 1];
                horizontalSum[row][col] = prevH + grid[row][col]
            }
        }
    }
};