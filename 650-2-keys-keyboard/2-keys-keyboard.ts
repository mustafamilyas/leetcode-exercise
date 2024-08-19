function minSteps(n: number): number {
    if(n === 1) return 0;
    const memo = {}
    function recurse(current: number, nextCharNum: number) {
        const key = current + ':' + nextCharNum;
        if(current === n) return 1;
        if(current > n || current + nextCharNum > n) return Number.MAX_SAFE_INTEGER;
        if(memo[key] !== undefined) return memo[key]
        const paste = recurse(current + nextCharNum, nextCharNum) + 1;
        const copy = current > nextCharNum ? recurse(current, current) + 1 : Number.MAX_SAFE_INTEGER;
        memo[key] = Math.min(paste, copy)
        return memo[key]
    }

    return recurse(1, 1)
};