function countBinarySubstrings(s: string): number {
    let curCount = 1;
    let prevCount = 0;
    let substr = 0;
    for(let i = 1; i <= s.length; i++) {
        if(s[i] == s[i - 1]) curCount++
        else {
            substr += Math.min(curCount, prevCount)
            prevCount = curCount;
            curCount = 1;
        }
    }
    return substr;
};