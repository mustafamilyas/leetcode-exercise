function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length) return false;
    const freqArray = new Array(26).fill(0)
    for(let i = 0; i < s.length; i++) {
        freqArray[s.charCodeAt(i) - 97]++;
        freqArray[t.charCodeAt(i) - 97]--;
    }
    return freqArray.every(value=>value === 0)
};