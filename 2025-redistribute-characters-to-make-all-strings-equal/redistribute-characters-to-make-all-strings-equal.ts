function makeEqual(words: string[]): boolean {
    const charCount: Record<string, number> = {}

    words.forEach(word=>{
        for(const char of word) {
            if(charCount[char] === undefined) charCount[char] = 0;
            charCount[char]++
        }
    })

    for(const v of Object.values(charCount)) {
        if(v % words.length) return false;
    }
    return true;
};