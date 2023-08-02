function permute(nums: number[]): number[][] {
    const result = []
    function recurse(combine: Set<number>) {
        if(combine.size === nums.length) {
            result.push(Array.from(combine))
            return;
        }
        for(const n of nums) {
            if(!combine.has(n)) {
                combine.add(n)
                recurse(combine)
                combine.delete(n)
            }
        }
    }
    recurse(new Set())
    return result;
};