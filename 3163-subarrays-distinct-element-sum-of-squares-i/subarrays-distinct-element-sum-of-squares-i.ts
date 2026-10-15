function sumCounts(nums: number[]): number {
    let sum = 0;
    for(let i = 0; i < nums.length; i++) {
        const set = new Set();
        for(let j = i; j < nums.length; j++) {
            set.add(nums[j]);
            sum += set.size * set.size;
        }
    }
    return sum;
};