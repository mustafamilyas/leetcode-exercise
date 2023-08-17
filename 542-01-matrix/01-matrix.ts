function updateMatrix(mat: number[][]): number[][] {
    const m = mat.length;
    const n = mat[0].length;
    const start: Array<Array<number>> = []; // [row, col, depth]

    function isOnTheEdge(row: number, col: number): boolean {
        return mat?.[row + 1]?.[col] === 0 || mat?.[row - 1]?.[col] === 0 || mat?.[row]?.[col + 1] === 0 || mat?.[row]?.[col - 1] === 0
    }

    function floodFill(row: number, col: number, depth: number) {
        if(row >= m || row < 0 || col >= n || col < 0) return;
        if(mat[row][col] <= depth && depth > 1) return;
        mat[row][col] = depth;
        floodFill(row + 1, col, depth + 1);
        floodFill(row - 1, col, depth + 1);
        floodFill(row, col + 1, depth + 1);
        floodFill(row, col - 1, depth + 1);
    }

    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(mat[i][j] === 0) continue;
            if(isOnTheEdge(i, j)) {
                start.push([i, j, 1]);
            } else {
                mat[i][j] = Number.MAX_SAFE_INTEGER;
            }
        }
    }

    for(const [row, col, depth] of start) {
        floodFill(row, col, depth);
    }

    return mat;
};