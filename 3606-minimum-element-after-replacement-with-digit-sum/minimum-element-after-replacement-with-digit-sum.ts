function minElement(nums: number[]): number {
    const memo = new Map<number, number>();
    let min = Infinity;
    for(const v of nums) {
        min = Math.min(digitSum(v), min);
    }
    return min;
    function digitSum(n: number): number {
        if(memo.has(n)) return memo.get(n);
        let sum = 0, cur = n;
        while(cur > 0) {
            sum += (cur % 10);
            cur = Math.trunc(cur / 10);
        }
        memo.set(n, sum);
        return sum;
    }
};