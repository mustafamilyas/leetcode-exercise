function getSumAbsoluteDifferences(nums: number[]): number[] {
    const sum = nums.reduce((acc, cur)=>acc + cur, 0)
    const length = nums.length;
    const result = []
    let prevSum = 0;
    for(let i = 0; i < length; i++) {
        const curSum = prevSum + nums[i]
        const prevDiff = i > 0 ? i * nums[i] - prevSum : 0
        const nextDiff = i < length - 1 ? sum - curSum - (length - i - 1) * nums[i] : 0;
        prevSum = curSum
        result.push(prevDiff + nextDiff)
    }
    return result;
};