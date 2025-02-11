function removeOccurrences(s: string, part: string): string {
    const splitted = s.split('');
    const sLen = splitted.length;
    const pLen = part.length;
    for(let i = 0; i <= sLen - pLen; i++) {
        let k = 0;
        for(; k < pLen; k++) {
            if(splitted[i + k] !== part[k]) break;
        }
        if(k == pLen) {
            splitted.splice(i, pLen);
            i -= pLen
        }
    }
    return splitted.join("")
};