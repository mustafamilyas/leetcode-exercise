function closeStrings(word1: string, word2: string): boolean {
    return word1.length === word2.length && hash(word1) === hash(word2);
};

function hash(s: string): string {
    const count: Record<string, number> = {};
    for(let i = 0; i < s.length; i++) {
        if(count[s[i]]) count[s[i]]++
        else count[s[i]] = 1
    }
    return Object.values(count).sort((a,b) => a-b).join(':') + ':' + Object.keys(count).sort().join(':')
}