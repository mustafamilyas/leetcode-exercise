function wordBreak(s: string, wordDict: string[]): boolean {
    const wordDictSet = new Set(wordDict);
    const wordLengthSet = new Set(wordDict.map((w)=>w.length));
    const startSet = new Set([0])

    for(const start of startSet) {
        for(const length of wordLengthSet) {
            if(wordDictSet.has(s.slice(start, start + length))) startSet.add(start + length) 
        }
    }
    return startSet.has(s.length)
};