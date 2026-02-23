function hasAllCodes(s: string, k: number): boolean {
    const set = new Set();
    for(let i = k; i <= s.length; i++) {
        set.add(s.slice(i - k, i))
    }
    return set.size == (1 << k);
};


/** 
000
001
010
011
100
101
110
111

*/