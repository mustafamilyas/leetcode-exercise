function spiralMatrixIII(rows: number, cols: number, rStart: number, cStart: number): number[][] {
    const result = [];
    let r = rStart, c = cStart, v = true, l = 0, s = 0;
    while(result.length < rows * cols) {
        if (r >= 0 && r < rows && c >= 0 && c < cols) {
            result.push([r, c])
        }
        if (s === l) {
            if (v) l++
            v = !v;
            s = 0
        }
        let rs = l % 2 ? 1 : -1
        r += v ? rs : 0
        c += v ? 0 : rs
        s++
    }
    return result;
};