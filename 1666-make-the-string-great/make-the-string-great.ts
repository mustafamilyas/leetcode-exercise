const U_L_DIFF = 32;
function makeGood(s: string): string {
    if(s.length <= 1) return s;
    for(let i = 0; i < s.length; i++) {
        if(s[i] && s[i + 1]) {
            const diff = Math.abs(s[i].charCodeAt(0) - s[i + 1].charCodeAt(0))
            if(diff === U_L_DIFF) {
                s = s.slice(0, i) + s.slice(i + 2)
                i -= 2
                continue;
            }
        }
    }
    return s;
};