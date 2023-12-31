function search(nums: number[], target: number): boolean {
    let start = 0;
    let end = nums.length - 1;
    while(start < end) {
        const mid = start + Math.ceil((end - start) / 2);
        if(nums[mid] === target) return true;

        if(nums[mid] === nums[start]) {
            start++
        } else  {
            if(nums[start] < nums[mid] && nums[mid] <= nums[end]) {
                // sorted
                if(nums[mid] > target)  end = mid - 1;
                else start = mid + 1;
            } else {
                // splitted
                if(nums[start] < nums[mid]) {
                    // pivot on the right
                    if(nums[start] <= target && target < nums[mid]) end = mid - 1;
                    else start = mid + 1;
                } else {
                    // pivot on the left
                    if(nums[mid] < target && target < nums[start]) start = mid + 1;
                    else end = mid - 1;
                }
            }
        }
    }
    return nums[start] === target;
};