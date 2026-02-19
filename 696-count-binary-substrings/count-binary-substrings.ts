function countBinarySubstrings(s: string): number {
    let cur = s[0];
    let curCount = 0;
    let prevCount = 0;
    let substr = 0;
    for(let i = 0; i <= s.length; i++) {
        if(cur == s[i]) curCount++
        else {
            substr += Math.min(curCount, prevCount)
            cur = s[i]
            prevCount = curCount;
            curCount = 1;
        }
    }
    return substr;
};