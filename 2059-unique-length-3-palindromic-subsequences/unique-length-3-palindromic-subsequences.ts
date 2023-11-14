function countPalindromicSubsequence(s: string): number {
    let counter = 0;
    let firstOccurences = new Array(26).fill(-1);
    let lastOccurences = new Array(26).fill(-1);

    for(let i = 0; i < s.length; i++) {
        const key = s.charCodeAt(i) - 97;
        if(firstOccurences[key] === -1) {
            firstOccurences[key] = i;
        }
        lastOccurences[key] = i;
    }

    for(let i = 0; i < firstOccurences.length; i++) {
        if(firstOccurences[i] === -1) continue;
        const start = firstOccurences[i]
        const end = lastOccurences[i]
        const set = new Set();
        for(let k = start + 1; k < end; k++) {
            set.add(s[k])
        }
        counter += set.size
    }
    return counter;
};