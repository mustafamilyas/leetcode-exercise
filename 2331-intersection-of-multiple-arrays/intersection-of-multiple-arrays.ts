function intersection(nums: number[][]): number[] {
    let set = new Set<number>(nums[0]);
    for(let i = 1; i < nums.length; i++) {
        const nextSet = new Set<number>();
        for(const n of nums[i]) {
            if(set.has(n)) nextSet.add(n)
        }
        set = nextSet;
    }
    return Array.from(set).sort((a,b)=>a-b)
};