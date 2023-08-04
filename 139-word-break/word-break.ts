function wordBreak(s: string, wordDict: string[]): boolean {
    const wordDictSet = new Set(wordDict);
    const memo = {}

    function dp(start: number, end: number): boolean {
        const key = `${start}:${end}`
        if(start > s.length) return true;
        if(end === s.length) return wordDictSet.has(s.slice(start, end));
        if(memo[key] !== undefined) return memo[key]
        const isWordInDict = wordDictSet.has(s.slice(start, end));
        const noTake = dp(start, end + 1);
        const take = isWordInDict && dp(end, end + 1)
        memo[key] = take || noTake
        return memo[key]
    }

    return dp(0, 1);
};