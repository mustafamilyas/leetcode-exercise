function numSquares(_n: number): number {
    const memo = {}
    function recursive(n: number) {
        if(n === 1) return 1;
        if(n === 0) return 0;
        if(memo[n] !== undefined) return memo[n]
        const x = Math.floor(Math.sqrt(n));
        memo[n] = Number.MAX_SAFE_INTEGER;
        for(let i = x; i >= x / 2; i-- ) {
            const remainder = n - i * i;
            memo[n] = Math.min(1 + recursive(remainder), memo[n]);
        }
        return memo[n];
    }
    return recursive(_n)
};