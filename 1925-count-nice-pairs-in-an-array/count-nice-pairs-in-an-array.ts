const MOD = 10 ** 9 + 7;

function countNicePairs(nums: number[]): number {
    const diffNums = []
    
    for(const n of nums) {
        const revN = rev(n)
        diffNums.push(n - revN)
    }

    let result = 0;
    const seen = new Map();

    for(const n of diffNums) {
        const prevSeen = (seen.get(n) ?? 0);
        result = (result + prevSeen) % MOD;
        seen.set(n, prevSeen + 1)    
    }
    return result;
};

function rev(n: number) {
    let res = 0;

    while(n > 0) {
        const remainder = n % 10;
        n = Math.floor(n / 10)
        res = res * 10 + remainder;
    }
    return res;
}