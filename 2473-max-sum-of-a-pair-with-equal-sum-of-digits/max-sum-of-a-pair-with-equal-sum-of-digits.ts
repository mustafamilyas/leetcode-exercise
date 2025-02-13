function maximumSum(nums: number[]): number {
    const sumDigitToMax = new Array(73); // 10^9 max sum digit is 72 (8 * 9)
    let max = -1;
    for(const v of nums) {
        let sumDigit = getSumDigit(v);
        if(sumDigitToMax[sumDigit] !== undefined) {
            max = Math.max(max, v + sumDigitToMax[sumDigit])
        }
        sumDigitToMax[sumDigit] = Math.max(sumDigitToMax[sumDigit] ?? 0, v)
    }
    return max;
};

function getSumDigit(nums: number): number {
    let sumDigit = 0
    while(nums > 0) {
        sumDigit += nums % 10;
        nums = Math.floor(nums / 10);
    }
    return sumDigit;
}