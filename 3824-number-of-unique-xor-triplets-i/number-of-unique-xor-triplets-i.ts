function uniqueXorTriplets(nums: number[]): number {
    const n = nums.length;
    if(n <= 2) return n;
    const x = Math.ceil(Math.log2(n + 1));
    return 2 ** x;
};