function maxLength(arr: string[]): number {
    const memo = {}
    function recursive(counter: number[], next: number): number {
        if(next === arr.length) return 0;
        const key = counter.join(':') + '-' + next;
        if(memo[key]) return memo[key]
        memo[key] = recursive([...counter], next + 1);
        const nextCounter = [...counter];
        const nextStr = arr[next]
        let i = 0
        for(; i < nextStr.length; i++) {
            const charCodeIdx = nextStr.charCodeAt(i) - 97
            if(nextCounter[charCodeIdx]) break;
            nextCounter[charCodeIdx]++
        }
        if(i === nextStr.length) {
            memo[key] = Math.max(memo[key], nextStr.length + recursive(nextCounter, next + 1))
        }
        return memo[key]
    }

    return recursive(new Array(26).fill(0), 0)
};