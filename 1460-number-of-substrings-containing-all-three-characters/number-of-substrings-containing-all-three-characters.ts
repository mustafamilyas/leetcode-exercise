function numberOfSubstrings(s: string): number {
    const n = s.length;
    const count = [0, 0, 0];
    let r = 0, res = 0;
    for(let l = 0; l < n; l++) {
        while(r < n && count.some((c) => c == 0)) count[s.charCodeAt(r++) - 97]++;
        if(count.every((c) => c > 0)) res += n - r + 1;
        count[s.charCodeAt(l) - 97]--;
    }
    return res;
};