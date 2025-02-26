function maxAbsoluteSum(nums: number[]): number {
    const rightSum = new Array(nums.length + 1);
    rightSum[nums.length] = [0, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER] // sum, max, min
    for(let i = nums.length - 1; i >= 0; i--) {
        rightSum[i] = [rightSum[i + 1][0] + nums[i], 0, 0] 
        rightSum[i][1] = Math.max(rightSum[i + 1][1], rightSum[i][0])
        rightSum[i][2] = Math.min(rightSum[i + 1][2], rightSum[i][0])
    }
    let max = Math.max(...rightSum[0].map(Math.abs));
    const total = rightSum[0][0];
    const leftSum = [0, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]; // sum, max, min
    for(let i = 0; i < nums.length - 1; i++) {
        leftSum[0] += nums[i];
        leftSum[1] = Math.max(leftSum[1], leftSum[0])
        leftSum[2] = Math.min(leftSum[2], leftSum[0])
        max = Math.max(
            max, 
            Math.abs(leftSum[0]), 
            Math.abs((leftSum[1] + rightSum[i + 1][1]) - total), 
            Math.abs(total - (leftSum[2] + rightSum[i + 1][2]))
        )
    }
    return max;
};

// 1, -3, 2, 3, -4
// 1, -2, 0, 3, -1
// -1, -2, 1, -1, -4