function hammingWeight(n: number): number {
    let ones = 0;
    for(let i = 0; i < 32; i++) {
        if((n & 1) === 1) ones++;
        n >>= 1
    }
    return ones
};