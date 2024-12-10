function maximumLength(s: string): number {
    const counter = new Array(26).fill(null).map(()=>[])
    let count = 1, max = -1;
    for(let i = 1; i <= s.length; i++) {
        if(s[i] === s[i - 1]) count++
        else {
            if(count >= 3) max = Math.max(max, count - 2)
            const charCode = s.charCodeAt(i - 1) - 97;
            counter[charCode].push(count)
            count = 1
        }
    }
    for(const c of counter) {
        if(c.length <= 1) continue;
        c.sort((a,b)=>b-a)
        if(c.length >= 2 && c[0] - 1 > 0 && c[0] - 1 <= c[1]) max = Math.max(max, c[0] - 1)
        if(c.length >= 3) max = Math.max(max, c[2])
    }
    return max
};