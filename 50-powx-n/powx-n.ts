function myPow(x: number, n: number): number {
    const memo = {};
    function pow(_n: number) {
        if(_n === 0) return 1;
        if(_n === 1) return x;
        if(memo[_n]) return memo[_n];
        const half = Math.floor(_n / 2);
        const res = pow(half) * pow(_n - half);
        memo[_n] = res;
        return memo[_n]
    }
    const resN = n < 0 ? n * -1 : n;
    return n < 0 ? 1 / pow(resN) : pow(resN)
};