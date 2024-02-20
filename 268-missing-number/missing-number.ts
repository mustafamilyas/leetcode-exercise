function missingNumber(nums: number[]): number {
    let sum = 0;
    for(let i = 0; i <= nums.length; i++) {
        sum += i - (nums[i] ?? 0)
    }
    return sum;
};