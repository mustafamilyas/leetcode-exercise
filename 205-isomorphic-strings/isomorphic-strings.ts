function isIsomorphic(s: string, t: string): boolean {
    const map = {};
    const haveSeen = new Set();

    for(let i = 0; i < s.length; i++) {
        if(map[s[i]]) {
            if(map[s[i]] !== t[i]) {
                return false;
            }
        } else {
            if(haveSeen.has(t[i])) {
                return false;
            }
            map[s[i]] = t[i];
            haveSeen.add(t[i])
        }
    }
    return true;
};