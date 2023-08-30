function minOperations(nums: number[]): number {
    let counter = 0;
    for(let i = 1; i < nums.length; i++) {
        if(nums[i - 1] >= nums[i]) {
            const next = nums[i - 1] + 1;
            counter += next - nums[i]
            nums[i] = next
        }
    }
    return counter;
};