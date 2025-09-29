function minScoreTriangulation(values: number[]): number {
    const max = values.length;
    const memo = new Map();

    function dp(l: number, r: number): number {
        if(l + 2 > r) return 0;
        const key = l * max + r;
        if(memo.has(key)) return memo.get(key);
        let min = Number.MAX_SAFE_INTEGER;
        for(let i = l + 1; i < r; i++) {
            min = Math.min(
                min,
                values[l] * values[i] * values[r] + dp(l, i) + dp(i, r)
            );
        }
        memo.set(key, min);
        return min;
    }

    return dp(0, max - 1);
};