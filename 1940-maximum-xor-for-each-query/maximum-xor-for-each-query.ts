function getMaximumXor(nums: number[], maximumBit: number): number[] {
    const result: number[] = new Array(nums.length).fill(0);
    const max = 2 ** maximumBit - 1;
    let current = 0;
    for(let i = 0; i < nums.length; i++) {
        current ^= nums[i]
        result[nums.length - 1 - i] = max ^ current; 
    }
    return result;
};