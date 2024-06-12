/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    let low = 0, mid = 0, high = nums.length - 1;

    while(mid <= high) {
        if (nums[mid] === 0) {
            [nums[mid], nums[low]] = [nums[low], nums[mid]]
            low++
            mid++
        } else if (nums[mid] === 1) {
            mid++
        } else {
            [nums[mid], nums[high]] = [nums[high], nums[mid]]
            high--
        }
    }
};