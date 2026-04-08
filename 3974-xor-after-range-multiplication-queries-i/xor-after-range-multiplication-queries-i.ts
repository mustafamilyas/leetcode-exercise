const mod = 1e9 + 7;
function xorAfterQueries(nums: number[], queries: number[][]): number {
    for(const [l, r, k, v] of queries) {
        for(let i = l; i <= r; i += k) {
            nums[i] = (nums[i] * v) % mod;
        }
    }
    let res = nums[0];
    for(let i = 1; i < nums.length; i++) {
        res ^= nums[i];
    }
    return res;
};