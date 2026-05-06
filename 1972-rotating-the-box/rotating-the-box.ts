function rotateTheBox(boxGrid: string[][]): string[][] {
    const m = boxGrid.length;
    const n = boxGrid[0].length;
    const res = Array.from({ length: n }, () => new Array(m).fill('.'));

    for(let i = 0;i < m; i++) {
        let k = 0;
        while(k < n) {
            let next = k, count = 0;
            while(next < n && boxGrid[i][next] != '*') {
                if(boxGrid[i][next] == '#') count++
                next++;
            }
            for(let y = 1; y <= count; y++) {
                res[next - y][m - i - 1] = '#';
            }
            if(next < n) res[next][m - i - 1] = boxGrid[i][next]
            k = next + 1;
        }
    }
    return res;
};