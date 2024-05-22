function partition(s: string): string[][] {
    const result = []
    function backtrack(combine: string[], next: number) {
        const last = combine[combine.length - 1];
        if(next === s.length) {
            if(isPalindrome(last)) result.push([...combine])
            return;
        }

        if(isPalindrome(last)) {
            combine.push(s[next])
            backtrack(combine, next + 1)
            combine.pop();
        }
        combine[combine.length - 1] = last + s[next]
        backtrack(combine, next + 1)
        combine[combine.length - 1] = last
    }
    backtrack([s[0]], 1);
    return result;
};

function isPalindrome(s: string): boolean {
    if(!s) return false;
    let l = 0, r = s.length - 1;

    while(l < r) {
        if(s[l] !== s[r]) return false;
        l++; r--
    }
    return true;
}