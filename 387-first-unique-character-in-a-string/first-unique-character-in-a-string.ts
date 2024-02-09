function firstUniqChar(s: string): number {
    const lastSeen = {}
    for(let i = s.length - 1; i >= 0; i--) {
        if(lastSeen[s[i]] !== undefined) lastSeen[s[i]] = -1;
        else lastSeen[s[i]] = i;
    }
    for(let i = 0; i < s.length; i++) {
        if(lastSeen[s[i]] !== - 1) return lastSeen[s[i]]
    }
    return -1
};