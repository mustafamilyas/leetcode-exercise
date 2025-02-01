function isArraySpecial(nums: number[]): boolean {
    let isOddFirst = nums[0] % 2 == 1;
    return nums.every((n, i) => i % 2 == 0 ? isOddFirst ? n % 2 : n % 2 == 0 : isOddFirst ? n % 2 == 0 : n % 2)
};