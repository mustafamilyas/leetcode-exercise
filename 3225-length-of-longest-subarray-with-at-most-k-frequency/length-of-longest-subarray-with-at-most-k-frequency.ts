function maxSubarrayLength(nums: number[], k: number): number {
    const map = new Map();
    let left = 0, max = 0;
    for(let i = 0; i < nums.length; i++) {
        const cur = nums[i];
        const curCount = (map.get(cur) ?? 0) + 1;
        map.set(cur, curCount);
        if(curCount > k) {
            while(left < i && map.get(cur) > k) {
                const leftItem = nums[left++];
                map.set(leftItem, map.get(leftItem) - 1)
            }
        }
        max = Math.max(max, i - left + 1)
    }
    return max;
};