function minSteps(s: string, t: string): number {
    const count = new Array(26).fill(0);
    let tCount = 0;
    for(let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - 97]++
    }
    for(let i = 0; i < t.length; i++) {
        const key = t.charCodeAt(i) - 97;
        if(count[key]) count[key]--
        else tCount++
    }
    return tCount + count.reduce((a, c)=>a+c, 0)
};