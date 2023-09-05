function minSubArrayLen(target: number, nums: number[]): number {
    let currentSum = 0, min = Number.MAX_SAFE_INTEGER, left = 0, right = 0;

    while(right <= nums.length && left < nums.length) {
        if(currentSum >= target) {
            min = Math.min(min, right - left);
            currentSum -= nums[left]
            left++
        } else {
            currentSum += nums?.[right] ?? 0;
            right++
        }
    }
    return min === Number.MAX_SAFE_INTEGER ? 0 : min;
};