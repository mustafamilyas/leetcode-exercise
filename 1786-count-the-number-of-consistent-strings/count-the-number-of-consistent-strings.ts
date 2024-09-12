function countConsistentStrings(allowed: string, words: string[]): number {
    const set = new Set(allowed.split(''));
    let count = 0;
    for(let i = 0; i < words.length; i++) {
        let k = 0;
        for(; k < words[i].length && set.has(words[i][k]); k++) {}
        if(k === words[i].length) count++
    }
    return count;
};