function maxLengthBetweenEqualCharacters(s: string): number {
    const charFirstAppearance = new Array(26).fill(-1);
    let max = -1;

    for(let i = 0; i < s.length; i++) {
        const charCode = s.charCodeAt(i) - 97;
        if(charFirstAppearance[charCode] == -1) {
            charFirstAppearance[charCode] = i 
        } else {
            max = Math.max(max, i - charFirstAppearance[charCode] - 1)
        }
    }
    return max
};