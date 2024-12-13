function isMatch(s: string, p: string): boolean {
    const memo = new Array(s.length + 1).fill(null).map(()=> new Array(p.length + 1));
    return recurse(0, 0)
    function recurse(si: number, pi: number): boolean {
        if(si === s.length && (pi === p.length || (pi === p.length - 1 && p[pi] === '*'))) return true;
        if(si === s.length && p[pi] !== '*') return false;
        if(memo[si][pi] !== undefined) return memo[si][pi];

        if(p[pi] === '?') {
            memo[si][pi] = recurse(si + 1, pi + 1)
            return memo[si][pi]
        }

        if(p[pi] === '*') {
            memo[si][pi] = recurse(si, pi + 1)
            if(!memo[si][pi] && si < s.length) memo[si][pi] = recurse(si + 1, pi)
            return memo[si][pi]
        }
        memo[si][pi] = s[si] === p[pi] && recurse(si + 1, pi + 1) 
        return memo[si][pi] 
    }
};