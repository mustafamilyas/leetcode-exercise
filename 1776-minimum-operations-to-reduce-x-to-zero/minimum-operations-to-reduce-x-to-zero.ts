function minOperations(nums: number[], x: number): number {
    let left = 0, right = nums.length -1, remaining = x;
    let min = Number.MAX_SAFE_INTEGER;

    while(left < nums.length) {
        if(remaining > 0 && left <= right) {
            remaining -= nums[right];
            right--
        } else {
            if(remaining === 0 && left <= right + 1) {
                min = Math.min(min, (nums.length - 1 - right) + left)
            }
            remaining -= nums[left];
            left++
            while(remaining < 0 && right < nums.length - 1) {
                right++
                remaining += nums[right]
            }
            if(remaining < 0) break;
        }
    }

    return min === Number.MAX_SAFE_INTEGER ? -1 : min;
};