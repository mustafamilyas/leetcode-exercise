function minElement(nums: number[]): number {
    let min = Infinity;
    for(const v of nums) {
        min = Math.min(digitSum(v), min);
    }
    return min;
    function digitSum(n: number): number {
        let sum = 0, cur = n;
        while(cur > 0) {
            sum += (cur % 10);
            cur = Math.trunc(cur / 10);
        }
        return sum;
    }
};