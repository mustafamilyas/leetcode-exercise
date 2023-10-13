function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length) return false;
    const map = {};
    for(let i = 0; i < s.length; i++) {
        if(map[s[i]] !== undefined) map[s[i]] ++
        else map[s[i]] = 1;

        if(map[t[i]] !== undefined) map[t[i]] --
        else map[t[i]] = -1;
    }
    return Object.values(map).every(value=>value === 0)
};