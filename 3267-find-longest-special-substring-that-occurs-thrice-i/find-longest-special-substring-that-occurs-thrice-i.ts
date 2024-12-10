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
        const t = getThreeHighest(c)
        if(
            t.length >= 2 && 
            t[0] - 1 > 0 && 
            t[0] - 1 <= t[1]
        ) max = Math.max(max, t[0] - 1)
        if(t.length >= 3) max = Math.max(max, t[2])
    }
    return max
};

function getThreeHighest(c: number[]) {
    const highest = [];
    for(const a of c) {
        if(highest.length === 0) highest.push(a)
        else {
            const idx = highest.findIndex(h => a > h);
            if(idx >= 0) highest.splice(idx, 0, a);
            else if(highest.length < 3) highest.push(a)
            if(highest.length > 3) highest.pop()
        }
    }
    return highest;
}