function singleNumber(nums: number[]): number {
    const seen = new Set();
    let totalDistinct = 0;
    let total = 0;
    for(const n of nums) {
        total += n
        if(!seen.has(n)) {
            totalDistinct += n
            seen.add(n)
        } 
    }
    return (3 * totalDistinct - total) / 2
};