function separateSquares(squares: number[][]): number {
    let lo = 1e9, hi = 0;
    let total = 0;
    for (const [, y, l] of squares) {
        lo = Math.min(lo, y);
        hi = Math.max(hi, y + l);
        total += l * l;
    }
    const target = total / 2;
    while (lo < hi) {
        const mid = normalize((lo + hi) / 2);
        let below = 0;
        for (const [, y, l] of squares) {
            if (mid > y) below += l * Math.min(mid - y, l);
        }
        if (below < target) lo = mid;
        else hi = mid;
        const diff = normalize(hi - lo);
        if(diff <= 1e-5) break;
    }
    return lo;
};

function normalize(n: number): number {
    return Math.round(n * 1e5) / 1e5;
}