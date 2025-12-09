const mod = 10 ** 9 + 7;
function specialTriplets(nums: number[]): number {
    const leftMap = {};
    const rightMap = {};
    let triplets = 0;
    for(let i = 0; i < nums.length; i++) {
        rightMap[nums[i]] = (rightMap[nums[i]] ?? 0) + 1;
    }
    for(let i = 0; i < nums.length - 1; i++) {
        rightMap[nums[i]]--;
        const nextValue = nums[i] * 2;
        triplets = (triplets + ((leftMap[nextValue] ?? 0) * (rightMap[nextValue] ?? 0)) % mod) % mod
        leftMap[nums[i]] = (leftMap[nums[i]] ?? 0) + 1; 
    }
    return triplets
};