function isSubsequence(s: string, t: string): boolean {
    let sIdx = 0;
    
    for(let tIdx = 0; tIdx < t.length && sIdx < s.length; tIdx++) {
        if(s[sIdx] === t[tIdx]) sIdx++
    }

    return sIdx === s.length;
};