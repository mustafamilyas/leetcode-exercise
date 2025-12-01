function maxRunTime(n: number, batteries: number[]): number {
    batteries.sort((a, b)=> b - a);
    const used = batteries.slice(0, n).reverse();
    let extra = batteries.slice(n).reduce((a, b)=> a + b, 0);
    for(let i = 1; i < n; i++) {
        const extraUsed = (used[i] - used[i - 1]) * i;
        if(extra < extraUsed) {
            return used[i - 1] + Math.trunc(extra / i)
        }
        extra -= extraUsed;
    }
    return used[n - 1] + Math.trunc(extra / n);
};