/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    const aK = k % nums.length;
    reverse(nums, 0, nums.length - 1)
    reverse(nums, 0, aK - 1)
    reverse(nums, aK, nums.length - 1)
};

function reverse(nums: number[], start: number, end: number) {
    for(let i = 0; i < Math.ceil((end - start) / 2); i++) {
        const temp = nums[end - i];
        nums[end - i] = nums[start + i] 
        nums[start + i] = temp
    }
}