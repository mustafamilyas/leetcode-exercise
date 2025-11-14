function rangeAddQueries(n: number, queries: number[][]): number[][] {
    const res = Array.from({ length: n }, () => new Array(n).fill(0));
    for(const [tx, ty, bx, by] of queries) {
        for(let x = tx; x <= bx; x++) {
            for(let y = ty; y <= by; y++) {
                res[x][y]++
            }
        }
    }
    return res;
};