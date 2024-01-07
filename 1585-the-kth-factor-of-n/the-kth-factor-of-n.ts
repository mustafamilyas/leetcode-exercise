function kthFactor(n: number, k: number): number {
    if(k === 1) return 1;
    let current = 2;
    for(let i = 2; i <= n; i++) {
        if(n % i === 0) {
            if(k === current) return i
            current++
        }
    }
    return -1;
};
