function closeStrings(word1: string, word2: string): boolean {
    if (word1.length !== word2.length) return false;
    const charCounter1 = createCharCounter(word1);
    const charCounter2 = createCharCounter(word2);
    for(let i = 0; i < 26; i++) {
        if((charCounter1[i] > 0 && charCounter2[i] === 0) || (charCounter1[i] === 0 && charCounter2[i] > 0)) return false;
    }
    return charCounter1.sort((a,b)=>b-a).join(':') === charCounter2.sort((a,b)=>b-a).join(':')
};

function createCharCounter(word: string) {
    const count = new Array(26).fill(0);
    for(const c of word) { count[c.charCodeAt(0) - 97]++ }
    return count;
}