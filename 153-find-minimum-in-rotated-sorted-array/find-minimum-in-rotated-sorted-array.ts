function findMin(nums: number[]): number {
    const n = nums.length;
    if(nums.length == 1 || nums[0] < nums[n - 1]) return nums[0];
    let l = 0, r = n - 1;
    while(l < r) {
        const mid = Math.floor((l + r) / 2);
        if(nums[mid] > nums[mid + 1]) return nums[mid + 1];
        if(nums[mid] > nums[0]) {
            l = mid
        } else {
            r = mid
        }
    }
    return nums[l]
};