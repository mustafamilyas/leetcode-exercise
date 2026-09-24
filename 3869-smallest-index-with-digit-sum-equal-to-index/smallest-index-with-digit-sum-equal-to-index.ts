function smallestIndex(nums: number[]): number {
    for(let i = 0; i < nums.length; i++) {
        if(sumDigit(nums[i]) == i) return i;
    }
    return -1;

    function sumDigit(n: number): number {
        let sum = 0;
        while(n > 0) {
            sum += (n % 10);
            n = Math.trunc(n / 10);
        }
        return sum;
    }
};