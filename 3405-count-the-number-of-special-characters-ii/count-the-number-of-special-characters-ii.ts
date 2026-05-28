function numberOfSpecialChars(word: string): number {
    const special = new Array(26).fill(0);
    for(let i = 0; i < word.length; i++) {
        const code = word.charCodeAt(i);
        if(code >= 97) {
            if((special[code - 97] & 2) == 2) special[code - 97] |= 4
            special[code - 97] |= 1
        } else  {
            special[code - 65] |= 2
        }
    }
    return special.reduce((acc, cur) => acc + (cur == 3 ? 1 : 0), 0);
};