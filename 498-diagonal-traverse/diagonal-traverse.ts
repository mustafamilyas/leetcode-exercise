function findDiagonalOrder(mat: number[][]): number[] {
    const result = [];
    let dir = -1;
    let row = 0;
    let col = 0;
    
    while(row < mat.length || col < mat[0].length) {
        const current = mat?.[row]?.[col];
        if(current === undefined) {
            if(dir === -1) {
                const next = mat?.[++row]?.[col];
                if(next === undefined) {
                    row++
                    col--
                }
            } else {
                col++
                const next = mat?.[row]?.[col];
                
                if(next === undefined) {
                    col++
                    row--
                }
            }
            dir *= -1;
        } else {
            result.push(current);
            row += dir;
            col -= dir;
        }
    }
    
    return result;
};