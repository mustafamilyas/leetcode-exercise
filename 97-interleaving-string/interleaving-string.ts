function isInterleave(s1: string, s2: string, s3: string): boolean {
    if (s3.length != s1.length + s2.length) return false;
    const memo = {};

    function dp(i1: number, i2: number, i3: number) {
        if(i3 === s3.length) return true;
        const key = `${i1}:${i2}:${i3}`;
        if(memo[key] !== undefined) return memo[key]
        let result = false
        if(s3[i3] === s1[i1]) {
            result ||= dp(i1+ 1, i2, i3 + 1)
        }
        if(s3[i3] === s2[i2]) {
            result ||= dp(i1, i2 + 1, i3 + 1)
        }
        memo[key] = result;
        return result;
    }
    return dp(0, 0, 0);
};