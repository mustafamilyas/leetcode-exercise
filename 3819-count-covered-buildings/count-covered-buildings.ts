function countCoveredBuildings(n: number, buildings: number[][]): number {
    const rowMap = new Map<number, [number, number]>(); // [min, max];
    const colMap = new Map<number, [number, number]>(); // [min, max];
    let covered = 0;
    
    for(const [row, col] of buildings) {
        const storedRow = rowMap.get(row) ?? [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];
        storedRow[0] = Math.min(storedRow[0], col);  
        storedRow[1] = Math.max(storedRow[1], col);
        rowMap.set(row, storedRow)

        const storedCol = colMap.get(col) ?? [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];
        storedCol[0] = Math.min(storedCol[0], row);  
        storedCol[1] = Math.max(storedCol[1], row);  
        colMap.set(col, storedCol)
    }

    for(const [row, col] of buildings) {
        const [minCol, maxCol] = rowMap.get(row);
        const [minRow, maxRow] = colMap.get(col);
        if(minCol < col && col < maxCol && minRow < row && row < maxRow) covered++;
    }

    return covered;
};