const MOD = 10 ** 9 + 7
function rangeSum(nums: number[], n: number, left: number, right: number): number {
    const subSum = [];
    for(let i = 0; i < n; i++) {
        let sum = 0;
        for(let k = i; k < n; k++) {
            sum += nums[k]
            subSum.push(sum)
        }
    }
    subSum.sort((a, b)=>a-b);
    return subSum.slice(left - 1, right).reduce((a,b)=>(a + b) % MOD , 0);
};