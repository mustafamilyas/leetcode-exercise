function climbStairs(n: number): number {
    let prev = 0;
    let cur = 1;
    for(let i = 1; i <= n; i++) {
        const next = cur + prev
        prev = cur;
        cur = next;
    }
    return cur;
};