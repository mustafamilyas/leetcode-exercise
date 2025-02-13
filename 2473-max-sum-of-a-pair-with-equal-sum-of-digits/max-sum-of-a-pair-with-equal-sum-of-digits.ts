function maximumSum(nums: number[]): number {
    const sumDigitToMax = new Map<number, number>();
    let max = -1;
    for(const v of nums) {
        let sumDigit = getSumDigit(v);
        if(sumDigitToMax.has(sumDigit)) {
            max = Math.max(max, v + sumDigitToMax.get(sumDigit))
        }
        sumDigitToMax.set(sumDigit, Math.max(sumDigitToMax.get(sumDigit) ?? 0, v))
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