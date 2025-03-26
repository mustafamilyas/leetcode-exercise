function minOperations(grid: number[][], x: number): number {
    const values = [];
    const mod = grid[0][0] % x;
    for(const row of grid) {
        for(const v of row) {
            if(v % x !== mod) return -1;
            values.push(Math.trunc(v / x))
        }
    }
    values.sort((a, b)=> a - b);
    const left = [0], n = values.length;
    for(let i = 1; i < n; i++) {
        left.push(i * (values[i] - values[i - 1]) + left[i - 1])
    }
    let right = 0, min = left[n - 1];
    for(let i = n - 2; i > -1; i--) {
        const next = (n - i - 1) * (values[i + 1] - values[i]) + right;
        const combined = next + left[i]
        if(combined > min) break;
        min = combined;
        right = next;

    }
    return min;
};