function singleNumber(nums: number[]): number {
    return usingMath(nums)
};

function usingMath(nums: number[]): number {
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
}

function usingHashmap(nums: number[]): number {
    const candidate = new Set();
    const seen = new Set();
    for(const n of nums) {
        if(seen.has(n)) {
            candidate.delete(n)
        } else {
            seen.add(n)
            candidate.add(n)
        }
    }
    return candidate.values().next().value
}