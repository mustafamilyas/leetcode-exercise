function maximumSubarraySum(nums: number[], k: number): number {
    const map = new Map();
    let l = 0, sum = 0, max = 0;
    for(let r = 0; r < nums.length; r++) {
        sum += nums[r]
        map.set(nums[r], (map.get(nums[r]) ?? 0) + 1)
        if(r - l === k - 1) {
            if(map.size === k) max = Math.max(max, sum)
            sum -= nums[l]
            const count = map.get(nums[l])
            if(count === 1) map.delete(nums[l])
            else map.set(nums[l], count - 1)
            l++
        }
    }
    return max;
};