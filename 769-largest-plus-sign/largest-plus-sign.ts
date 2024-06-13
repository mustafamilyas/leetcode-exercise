function orderOfLargestPlusSign(n: number, mines: number[][]): number {
    let x = new Array(n).fill(0).map(() => new Array(n).fill(n));
    mines.forEach(a => x[a[0]][a[1]] = 0);

    for(let i = 0; i < n; i++){
        let[l, r, u, d] = [0, 0, 0, 0];
        for(let j = 0, k = n - 1; j < n; j++, k--){
           l = x[i][j] && l + 1;
           r = x[i][k] && r + 1;
           u = x[j][i] && u + 1;
           d = x[k][i] && d + 1;

           if(l < x[i][j]) x[i][j] = l;
           if(r < x[i][k]) x[i][k] = r;
           if(u < x[j][i]) x[j][i] = u;
           if(d < x[k][i]) x[k][i] = d;
        }
    }
    return Math.max(...x.map(el => Math.max(...el)));
};
