function minimizedMaximum(n: number, quantities: number[]): number {
    let left = 1,
        right = quantities.reduce((prev, curr) => Math.max(prev, curr)), 
        x = 0;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (quantities.reduce((prev, curr) => prev + Math.ceil(curr / mid), 0) <= n) {
            x = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return x;
};