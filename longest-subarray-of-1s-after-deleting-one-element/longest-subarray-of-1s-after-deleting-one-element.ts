function longestSubarray(nums: number[]): number {
    let prev = 0, cur = 0, max = 0;
    for(const n of nums) {
        if(n === 0) {
            max = Math.max(prev + cur, max);
            prev = cur;
            cur = 0;
        } else {
            cur++;
        }
    }
    if(cur === nums.length) return cur - 1
    return Math.max(max, prev + cur);
};