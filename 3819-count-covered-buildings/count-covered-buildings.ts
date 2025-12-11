function countCoveredBuildings(n: number, buildings: number[][]): number {
    const rowMin = Array.from({length: n + 1}, () => n + 1);
    const rowMax = Array.from({length: n + 1}, () => 0);
    const colMin = Array.from({length: n + 1}, () => n + 1);
    const colMax = Array.from({length: n + 1}, () => 0);
    let covered = 0;

    for(const [row, col] of buildings) {
        rowMin[row] = Math.min(rowMin[row], col);  
        rowMax[row] = Math.max(rowMax[row], col);

        colMin[col] = Math.min(colMin[col], row);  
        colMax[col] = Math.max(colMax[col], row);  
    }

    for(const [row, col] of buildings) {
        const [minCol, maxCol] = [rowMin[row], rowMax[row]];
        const [minRow, maxRow] = [colMin[col], colMax[col]];
        if(minCol < col && col < maxCol && minRow < row && row < maxRow) covered++;
    }

    return covered;
};