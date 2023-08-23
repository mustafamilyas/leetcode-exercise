function reorganizeString(s: string): string {
    const map: Record<string, number> = {};

    for(const c of s) {
        if(map[c]) map[c]++
        else map[c] = 1;
    }

    const charEntries = Object.entries(map);
    charEntries.sort((a, b)=>b[1] - a[1]);
    if(charEntries[0][1] > Math.ceil(s.length / 2)) return '';
    const result = new Array(s.length);
    let curI = 0;
    let curCounter = charEntries[0][1];
    for(let i = 0; i < result.length; i+=2) {
        if(curCounter === 0) {
            curI++
            curCounter = charEntries[curI][1];
        }
        result[i] = charEntries[curI][0];
        curCounter--
    }
    for(let i = 1; i < result.length; i+=2) {
        if(curCounter === 0) {
            curI++
            curCounter = charEntries[curI][1];
        }
        result[i] = charEntries[curI][0];
        curCounter--
    }
    return result.join('');
};