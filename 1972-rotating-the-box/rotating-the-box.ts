function rotateTheBox(box: string[][]): string[][] {
    const m = box.length, n = box[0].length;
    const result = new Array(n).fill(null).map(()=> new Array(m).fill('.'));
    for(let i = 0; i < m; i++) {
        let count = 0;
        for(let k = 0; k <= n; k++) {
            if(box[i][k] === '#') count++
            else if(box[i][k] === '*' || box[i][k] == null) {
                const col = m - i - 1
                const row = k;
                if(k < n) result[row][col] = '*'
                for(let c = 1; c <= count; c++) {
                    result[row - c][col] = '#'
                }
                count = 0;
            }
        }
    }
    return result;
};
// n = 3 - 
// [2, 0] => [0, 0] 3 - 2 - 1
// [1, 0] => [0, 1] 3 - 1 - 1
// [0, 0] => [0, 2] 3
// [0, 3] => [3, 0]