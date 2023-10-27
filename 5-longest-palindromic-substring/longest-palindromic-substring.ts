function longestPalindrome(s: string): string {
    function getLongestPalindromeFromMiddle(idx: number) {
        let oddI = 1;
        for(; idx - oddI >= 0 && idx + oddI < s.length && s[idx - oddI] === s[idx + oddI]; oddI++) {}
        oddI--

        let longest = s.slice(idx - oddI, idx + oddI + 1);
        if(s[idx] === s[idx + 1]) {
            let evenI = 1;
            for(; idx - evenI >= 0 && idx + evenI + 1 < s.length && s[idx - evenI] === s[idx + evenI + 1]; evenI++){}
            if(2 * evenI > longest.length) {
                evenI--
                longest = s.slice(idx - evenI, idx + evenI + 2);
            }
        }
        return longest; 
    }

    const mid = Math.floor(s.length / 2)
    let longest = getLongestPalindromeFromMiddle(mid);

    for(let i = mid - 1; i >= 0; i--) {
        const localLongest = getLongestPalindromeFromMiddle(i);
        if(localLongest.length > longest.length) {
            longest = localLongest;
        }
    }

    for(let i = mid + 1; i < s.length; i++) {
        const localLongest = getLongestPalindromeFromMiddle(i);
        if(localLongest.length > longest.length) {
            longest = localLongest;
        }
    }

    return longest;
};