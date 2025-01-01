function maxScore(s: string): number {
    let ones = 0, zeroes = 0, max = 0;
    for(const c of s) {
        if(c === '1') ones++
    }
    for(let i = 0; i < s.length - 1; i++) {
        const c = s[i]
        if(c === '1') ones--
        else zeroes++
        max = Math.max(ones + zeroes, max)
    }
    return max;
};