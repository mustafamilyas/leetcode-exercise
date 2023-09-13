function lengthOfLongestSubstring(s: string): number {
    let left = 0, right = 0, res = 0;
    const map = {};
    while(left < s.length && right < s.length) {
        map[s[right]] = (map?.[s[right]] ?? 0) + 1;
        if(map[s[right]] === 2) {
            res = Math.max(res, right - left);
            for(; left < right && map[s[right]] === 2; left++) {
                map[s[left]]--
            }
        }
        right++;
    }
    res = Math.max(res, right - left);
    return res;
};