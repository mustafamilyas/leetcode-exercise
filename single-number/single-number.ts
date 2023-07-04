function singleNumber(nums: number[]): number {
    let remaining = 0;
    for(const n of nums) {
        remaining ^= n
    }
    return remaining;
};