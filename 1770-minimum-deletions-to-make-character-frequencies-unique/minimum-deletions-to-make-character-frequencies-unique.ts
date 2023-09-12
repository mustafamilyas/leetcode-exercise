function minDeletions(s: string): number {
    const map: Record<string, number> = {}
    for(const c of s) {
        if(map[c]) map[c]++
        else map[c] = 1
    }

    const counterMap: Record<number, number> = {};
    let max= 1;
    Object.values(map).forEach((n)=>{
        if(counterMap[n]) counterMap[n]++
        else counterMap[n] = 1;
        max = Math.max(n, max)
    })
    let result = 0;
    for(let i = max; i > 0; i--) {
        if(!counterMap?.[i] || counterMap[i] === 1) continue
        const changes = (counterMap[i] - 1) 
        result += changes
        counterMap[i - 1] = (counterMap[i - 1] ?? 0) + changes
    }
    return result;
};