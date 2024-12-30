const mod = 1_000_000_007
function countGoodStrings(low: number, high: number, zero: number, one: number): number {
    const memo = new Array(high + 1).fill(0);
    memo[0] = 1;
    for(let curLength = 1; curLength <= high; curLength++) {
        if(curLength >= zero) memo[curLength] += memo[curLength - zero]
        if(curLength >= one) memo[curLength] += memo[curLength - one]
        memo[curLength] %= mod;
    }

    let sum = 0;
    for(let i = low; i <= high; i++) {
        sum = (sum + memo[i]) % mod;
    }
    return sum;
};