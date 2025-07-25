function maxSum(nums: number[]): number {
    const set = new Set();
    let max = Number.MIN_SAFE_INTEGER, sum = 0;
    for(const n of nums) {
        if (n <= 0) {
            max = Math.max(max, n)
            continue;
        }
        if (set.has(n)) continue
        sum += n;
        set.add(n);
    }
    return set.size == 0 ? max : sum;
};