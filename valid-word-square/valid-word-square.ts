function validWordSquare(words: string[]): boolean {
    let length = words.length;
    for(const w of words) {
        length = Math.max(length, w.length)
    }
    for(let i = 0; i < length; i++) {
        for(let k = 0; k < length; k++) {
            if(words?.[i]?.[k] !== words?.[k]?.[i]) return false;
        }
    }
    return true;
};