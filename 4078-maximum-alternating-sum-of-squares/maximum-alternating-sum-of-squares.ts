function maxAlternatingSum(nums: number[]): number {
    const absNums = nums.map(Math.abs);
    absNums.sort((a, b) => b - a);
    let left = 0, right = absNums.length - 1, sum = 0;
    while(left < right) {
        sum += absNums[left++] ** 2;
        sum -= absNums[right--] ** 2;
    }
    if(left == right) {
        sum += absNums[left] ** 2;
    }
    return sum;
};