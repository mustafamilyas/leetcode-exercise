function divisorSubstrings(num: number, k: number): number {
    let res = 0, n = num;
    const lowest = 10 ** (k - 1);
    while(n >= lowest) {
        const cur = n % (10 ** k);
        if(num % cur == 0) res++;
        n = Math.trunc(n / 10);
    }
    return res;
};