function smallestNumber(n: number, t: number): number {
    for(let i = 0; i < 10; i++) {
        const cur = n + i;
        const ten = Math.trunc(cur / 10) || 1;
        const one = cur % 10;
        if(ten * one % t == 0) return cur;
    }
    return 100;
};