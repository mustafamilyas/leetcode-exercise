function minSteps(s: string, t: string): number {
    const count = new Array(26).fill(0);
    let changes = 0;
    for(const c of s) {
        count[c.charCodeAt(0) - 97]++
    }
    for(const c of t) {
        const countIndex = c.charCodeAt(0) - 97;
        if(count[countIndex] > 0) count[countIndex]--
        else changes++
    }
    return changes
};