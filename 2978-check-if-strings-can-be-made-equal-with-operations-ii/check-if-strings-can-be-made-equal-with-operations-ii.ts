function checkStrings(s1: string, s2: string): boolean {
    const diff = 2;
    const counter = Array.from({ length: diff }, () => new Array(26).fill(0));
    for(let i = 0; i < s1.length; i++) {
        const y = s1.charCodeAt(i) - 97;
        const x = i % diff;
        counter[x][y]++;
    }
    for(let i = 0; i < s2.length; i++) {
        const y = s2.charCodeAt(i) - 97;
        const x = i % diff;
        if(counter[x][y] == 0) return false;
        counter[x][y]--;
    }
    return true;
};