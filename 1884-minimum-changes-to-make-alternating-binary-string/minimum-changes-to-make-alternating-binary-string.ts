function minOperations(s: string): number {
    let ops = 0;
    for(let i = 0; i < s.length; i++) {
        if(i % 2 != s[i] as any as number) ops++; 
    }
    return Math.min(ops, s.length - ops);
};