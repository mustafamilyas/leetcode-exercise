function sumOfSquares(nums: number[]): number {
    return nums.reduce((acc, cur, i) => acc + (nums.length % (i + 1) == 0 ? cur * cur: 0), 0);
};