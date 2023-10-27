function longestPalindrome(s: string): string {
    function expandFromMiddle(left: number, right: number) {
        while(left >= 0 && right < s.length) {
            if(s[left] !== s[right]) break;
            left--
            right++
        }
        return s.slice(left + 1, right)
    }
    let longest = ''
    for(let i = 0; i < s.length; i++) {
        const expandOdd = expandFromMiddle(i, i);
        const expandEven = expandFromMiddle(i, i + 1);
        if(expandOdd.length > longest.length) longest = expandOdd
        if(expandEven.length > longest.length) longest = expandEven
    }

    return longest;
};