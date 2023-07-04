function singleNumber(nums: number[]): number {
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
};