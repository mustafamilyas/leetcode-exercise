function findDuplicate(nums: number[]): number {
    for(let i = 0; i < nums.length; i++) {
        const index = Math.abs(nums[i]) - 1
        if(nums[index] < 0) {
            return Math.abs(nums[i])
        } else {
            nums[index] *= -1
        }
    }
    return 0;
};