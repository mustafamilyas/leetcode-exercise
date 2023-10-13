function groupAnagrams(strs: string[]): string[][] {
    const result = new Map<string, string[]>();
    for(const str of strs) {
        const keyArray = new Array(97).fill(0);
        for(const c of str) {
            keyArray[c.charCodeAt(0) - 97]++
        }
        const key = keyArray.join(':');
        const prevRes = result.get(key) 
        if(prevRes) {
            prevRes.push(str)
        } else {
            result.set(key, [str])
        }
    }
    return Array.from(result.values())
};