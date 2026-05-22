function search(nums: number[], target: number): number {
    const n = nums.length;
    let l = 0, r = n - 1;
    while(l < r) {
        const mid = Math.floor((l + r) / 2);
        if(nums[mid] == target) return mid;
        if(nums[l] < nums[r]) {
            if(nums[mid] < target) {
                l = mid + 1;
            } else {
                r = mid;
            }
        } else {
            if(nums[l] <= nums[mid]) {
                if(nums[l] > target || nums[mid] < target) {
                    l = mid + 1
                } else {
                    r = mid;
                }
            } else {
                if(nums[l] > target && nums[mid] < target) {
                    l = mid + 1
                } else {
                    r = mid;
                }
            }
        }
    }
    return nums[l] == target ? l : -1;
};


/*
1 10 20

10 20 1
20 1 10
*/