function wordBreak(s: string, wordDict: string[]): string[] {
    const wordsByStartLetter = {};
    const result = []
    for(const w of wordDict) {
        if(wordsByStartLetter[w[0]]) wordsByStartLetter[w[0]].push(w)
        else wordsByStartLetter[w[0]] = [w]
    }
    backtrack([], 0)

    return result;
    // ======================= UTILITY =======================
    function backtrack(combine: string[], nextIndex: number) {
        if(nextIndex === s.length) {
            result.push(combine.join(' '))
            return;
        }
        const nextPossibleCombines = wordsByStartLetter[s[nextIndex]] ?? []
        for(const w of nextPossibleCombines) {
            if(s.slice(nextIndex, nextIndex +  w.length) !== w) continue;
            combine.push(w)
            backtrack(combine, nextIndex + w.length)
            combine.pop();
        }
    }
};