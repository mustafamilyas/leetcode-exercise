/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    const count = [0, 0, 0]
    for(const n of nums) {
        count[n]++
    }
    let ci = 0;
    for(let i = 0; i < nums.length; i++) {
        while(!count[ci]) ci++
        nums[i] = ci;
        count[ci]--
    }
};