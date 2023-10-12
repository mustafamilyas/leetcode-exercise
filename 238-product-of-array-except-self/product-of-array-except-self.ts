function productExceptSelf(nums: number[]): number[] {
    const right = new Array(nums.length).fill(1);
    right[right.length - 1] = nums[nums.length - 1];
    for(let i = nums.length - 2; i >= 0; i--) {
        right[i] = nums[i] * right[i + 1];
    }
    let left = 1;
    for(let i = 0; i < nums.length; i++) {
        right[i] = left * (right?.[i + 1] ?? 1)
        left *= nums[i]
    }
    return right
};