function maxSum(nums: number[]): number {
    nums.sort((a, b)=>b - a);
    let sum = 0;
    let i = 0;
    do {
        if (nums[i] <= 0 && i > 0) break;
        if (nums[i] !== nums[i - 1]) sum += nums[i];
        i++;
    } while(i < nums.length)
    return sum;
};