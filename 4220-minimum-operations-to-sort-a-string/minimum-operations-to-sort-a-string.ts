function minOperations(s: string): number {
    if(s.length < 2) return 0;
    if(s.length == 2) return s.charCodeAt(0) <= s.charCodeAt(1) ? 0 : -1;
    let min = Number.MAX_SAFE_INTEGER, max = Number.MIN_SAFE_INTEGER, minCount = 0, maxCount, sorted = true;
    for(let i = 0; i < s.length; i++) {
        const charCode = s.charCodeAt(i);
        const prev = s.charCodeAt(i - 1) || 0;
        if(prev > charCode) sorted = false;
        if(min == charCode) minCount++
        else if(min > charCode) {
            minCount = 1;
            min = charCode
        }
        if(max == charCode) maxCount++
        else if(max < charCode) {
            maxCount = 1;
            max = charCode
        }
    }
    if(sorted) return 0;
    const start = s.charCodeAt(0);
    const end = s.charCodeAt(s.length - 1);
    if(start == max && end == min) return maxCount > 1 || minCount > 1 ? 2 : 3;
    if(start == min || end == max) return 1;
    return 2;
};