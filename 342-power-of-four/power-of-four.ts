function isPowerOfFour(n: number): boolean {
    if(n === 1) return true;
    while(n > 4) {
        n /= 4;
    }
    return n === 4
};