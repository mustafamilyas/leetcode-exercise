function mirrorDistance(n: number): number {
    return Math.abs(n - reverse(n))
};

function reverse(n: number): number {
    let reversed = 0;
    while(n > 0) {
        reversed = (reversed * 10) + (n % 10);
        n = Math.trunc(n / 10)
    }
    return reversed;
}