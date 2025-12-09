const mod = 10 ** 9 + 7;
function specialTriplets(nums: number[]): number {
    const leftMap = new Map<number, number>();
    const rightMap = new Map<number, number>();
    let triplets = 0;
    for(const n of nums) {
        rightMap.set(n, (rightMap.get(n) ?? 0) + 1);
    }
    for(let i = 0; i < nums.length - 1; i++) {
        rightMap.set(nums[i], (rightMap.get(nums[i]) ?? 0) - 1);
        const nextValue = nums[i] * 2;
        triplets = (triplets + ((leftMap.get(nextValue) ?? 0) * (rightMap.get(nextValue) ?? 0)) % mod) % mod
        leftMap.set(nums[i], (leftMap.get(nums[i]) ?? 0) + 1);
    }
    return triplets
};