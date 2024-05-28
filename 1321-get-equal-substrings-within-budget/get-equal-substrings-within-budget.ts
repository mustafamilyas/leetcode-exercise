function equalSubstring(s: string, t: string, maxCost: number): number {
    const diffArray = [];
    let maxLength = 0, l = 0, r = 0, cost = maxCost;
    for(let i = 0; i < s.length; i++) {
        diffArray.push(Math.abs(s.charCodeAt(i) - t.charCodeAt(i)))
    }
    while(r < s.length) {
        if(diffArray[r] > cost) {
            if(l === r) {
                l++
                r++
            } else {
                cost += diffArray[l++]
            }
        } else {
            cost -= diffArray[r++]
            maxLength = Math.max(maxLength, r - l)
        }
    }
    return maxLength;
};