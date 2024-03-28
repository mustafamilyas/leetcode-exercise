function maxSubarrayLength(nums: number[], k: number): number {
    let l = 0, counter = {}, max = 0;
    for(let r = 0; r < nums.length; r++) {
        const curNum = nums[r];
        counter[curNum] = (counter[curNum] ?? 0) + 1;
        if(counter[curNum] > k) {
            while(counter[curNum] > k && l < r) --counter[nums[l++]]
        }
        max = Math.max(max, r - l + 1)
    }
    return max;
};