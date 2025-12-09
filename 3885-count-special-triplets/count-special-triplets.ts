const mod = 10 ** 9 + 7;
function specialTriplets(nums: number[]): number {
    const leftMap = new Map<number, number>();
    const totalMap = new Map<number, number>();
    let triplets = 0;
    for(const n of nums) {
        totalMap.set(n, (totalMap.get(n) ?? 0) + 1);
    }
    for(let i = 0; i < nums.length - 1; i++) {
        const nextValue = nums[i] * 2;
        const leftValue = leftMap.get(nextValue) ?? 0
        triplets = (triplets + (leftValue * ((totalMap.get(nextValue) ?? 0) - leftValue - (nextValue == 0 ? 1 : 0))) % mod) % mod
        leftMap.set(nums[i], (leftMap.get(nums[i]) ?? 0) + 1);
    }
    return triplets
};