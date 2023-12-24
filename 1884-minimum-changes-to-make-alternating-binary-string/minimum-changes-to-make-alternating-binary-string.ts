function minOperations(s: string): number {
    let operations = 0;
    for(let i = 0; i < s.length; i++) {
        if(i % 2 != s[i] as unknown as number) operations++ 
    }
    return Math.min(operations, s.length - operations)
};