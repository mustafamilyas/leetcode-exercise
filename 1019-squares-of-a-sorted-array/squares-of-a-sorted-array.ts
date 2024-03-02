function sortedSquares(nums: number[]): number[] {
    const firstNonNegative = nums.findIndex((n) => n >= 0);
    let nonNegative = firstNonNegative === -1 ? nums.length : firstNonNegative;
    let negative = nonNegative - 1;
    const answer = [];

    while(negative >= 0 || nonNegative < nums.length) {
        if(nonNegative === nums.length || Math.abs(nums[negative]) < nums[nonNegative]) {
            answer.push(nums[negative] * nums[negative])
            negative--
        } else {
            answer.push(nums[nonNegative] * nums[nonNegative])
            nonNegative++
        }
    }
    return answer

};