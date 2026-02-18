function hasAlternatingBits(n: number): boolean {
    let expectedBit = n & 1;
    while(n > 0) {
        const curBit = n & 1;
        if(curBit !== expectedBit) return false;
        n >>= 1;
        expectedBit = 1 ^ (expectedBit & 1);

    }
    return true
};