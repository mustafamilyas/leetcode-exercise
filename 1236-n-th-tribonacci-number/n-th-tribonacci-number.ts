function tribonacci(n: number): number {
    if(n === 0) return 0;
    if(n <= 2) return 1;
    let a1 = 0;
    let a2 = 1;
    let a3 = 1;
    for(let i = 3; i <= n; i++) {
        const next = a1 + a2 + a3;
        a1 = a2;
        a2 = a3
        a3 = next;
    }
    return a3
};