function countCommas(n: number): number {
    let lower = 1000, res = 0;
    while (lower <= n) {
        res += n - lower + 1;
        lower *= 1000;
    }
    return res;
};