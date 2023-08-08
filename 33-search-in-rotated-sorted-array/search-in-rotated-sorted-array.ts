function search(nums: number[], target: number): number {

    function bs(start: number, end: number): number {
        while(start <= end) {
            const mid = start + Math.ceil((end - start) / 2);
            if(nums[mid] === target) return mid;
            if(nums[mid] > target) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        return -1;
    }

    // search rotate point
    let start = 0;
    let end = nums.length - 1;
    while(start <= end) {
        const mid = start + Math.ceil((end - start) / 2);
        if(nums[mid] === target) return mid;
        if(nums[mid] > nums[nums.length - 1]) {
            start = mid + 1
        } else {
            end = mid - 1;
        }
    }
    const left = bs(0, start - 1);
    if(left !== -1) return left;
    return bs(start, nums.length - 1);
};