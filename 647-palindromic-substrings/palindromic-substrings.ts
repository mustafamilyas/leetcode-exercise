function countSubstrings(s: string): number {
    function countFromMiddle(left: number, right: number) {
        let count = 0;
        while(left >= 0 && right < s.length && s[left] === s[right]) {
            left--; right++
            count++
        }
        return count;
    }
    let result = 0;
    for(let i = 0; i < s.length; i++) {
        const odd = countFromMiddle(i - 1, i + 1);
        const even = countFromMiddle(i, i + 1)
        result += odd + even + 1; // 1 is from the character itself
    }
    return result;
};


// aaaaa
