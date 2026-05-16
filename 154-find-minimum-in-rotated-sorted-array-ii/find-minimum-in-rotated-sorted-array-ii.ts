function findMin(nums: number[]): number {
    const n = nums.length;
    if(nums.length == 1 || nums[0] < nums[n - 1]) return nums[0];
    let l = 0, r = n - 1;
    while(l < r - 1) {
        const mid = Math.floor((l + r) / 2);
        if(nums[mid] > nums[mid + 1]) return nums[mid + 1];
        if(nums[l] < nums[r]) return nums[l]
        if(nums[l] == nums[r]) {
            if(nums[l] == nums[mid]) {
                if(l == mid) {
                    break; 
                } else {
                    l++
                    r--
                    continue;
                }
            }
        }
        if (nums[mid] >= nums[l]) {
            l = mid
        } else {
            r = mid
        }
    }
    return Math.min(nums[l], nums[r])
};