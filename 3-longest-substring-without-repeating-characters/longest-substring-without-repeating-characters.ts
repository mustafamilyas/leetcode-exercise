function lengthOfLongestSubstring(s: string): number {
    const charMap = new Array(26).fill(-1);
    let start = 0, end = 0, max = 0;
    
    for(; end < s.length; end++) {
        const currentIndex = s.charCodeAt(end) - 97;
        if(charMap[currentIndex] > -1) {
            // calculate max
            max = Math.max(end - start, max);
            // slide window
            while(start < end) {
                charMap[s.charCodeAt(start) - 97] = -1;
                if(start !== end && s.charCodeAt(end) === s.charCodeAt(start)) {
                    start++;    
                    break;
                }
                start++;
            }
            charMap[currentIndex] = end;
        } else {
            charMap[currentIndex] = end;
        }
    }
    if(start !== end) return Math.max(max, end - start)
    return max
};