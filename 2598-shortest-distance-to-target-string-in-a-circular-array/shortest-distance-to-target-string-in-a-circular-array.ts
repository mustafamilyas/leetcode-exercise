function closestTarget(words: string[], target: string, startIndex: number): number {
    let min = Number.MAX_SAFE_INTEGER;
    const n = words.length;
    for(let i = 0; i < n; i++) {
        if(words[i] === target) {
            if(i < startIndex) {
                min = Math.min(min, startIndex - i, n - startIndex + i)
            } else {
                min = Math.min(min, i - startIndex, startIndex + n - i)
            }
        }
    }
    return min == Number.MAX_SAFE_INTEGER ? -1 : min;
};

// case i < startIndex
// ["hello","i","am","leetcode","hello"]
// i = 1 s = 3, left = s - i = 3 - 1 = 2, right = n - s + i = 5 - 3 + 1 = 3

// case i > startIndex
// ["hello","i","am","leetcode","hello"]
// i = 3 s = 1, left = i - s = 3 - 1 = 2, right = s + n - i = 1 + 5 - 3 = 3