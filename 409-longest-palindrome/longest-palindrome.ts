function longestPalindrome(s: string): number {
    const set = new Set();
    for(const c of s) {
        if(set.has(c)) set.delete(c)
        else set.add(c)
    }
    if(set.size) return s.length - set.size + 1 // at least we need one odd
    return s.length;
};