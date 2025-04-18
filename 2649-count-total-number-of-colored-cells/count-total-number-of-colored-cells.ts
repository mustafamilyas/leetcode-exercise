function coloredCells(n: number): number {
    return 1 + 2 * n * (n - 1)
};
// 1  1   = 1 + 0 * 4
// 5  4   = 1 + 0 * 4 + 1 * 4
// 13 8   = 1 + 0 * 4 + 1 * 4 + 2 * 4
// 25 12  = 1 + 0 * 4 + 1 * 4 + 2 * 4 + 3 * 4
// 41 16  = 1 + 0 * 4 + 1 * 4 + 2 * 4 + 3 * 4 + 4 * 4
