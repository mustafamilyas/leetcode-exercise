function countCommas(n: number): number {
    return n < 1000 ? 0 : n - 999
};