function longestNiceSubarray(nums: number[]): number {
    let l = 0, r = 0, max = 0, count = 0;

    while (r < nums.length) {
        while ((count & nums[r]) !== 0) {
            count ^= nums[l];
            l++;
        }

        count |= nums[r];

        max = Math.max(max, r - l + 1);
        r++;
    }

    return max;
};