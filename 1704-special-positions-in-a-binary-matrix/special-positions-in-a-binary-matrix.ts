function numSpecial(mat: number[][]): number {
    const m = mat.length, n = mat[0].length;
    const row = new Array(m).fill(0), col = new Array(n).fill(0);
    let special = 0;
    for(let i = 0; i < m; i++) {
        for(let k = 0; k < n; k++) {
            row[i] += mat[i][k];
            col[k] += mat[i][k];
        }
    }
    for(let i = 0; i < m; i++) {
        for(let k = 0; k < n; k++) {
            if(mat[i][k] == 1 && row[i] == 1 && col[k] == 1) special++;
        }
    }
    return special;
};