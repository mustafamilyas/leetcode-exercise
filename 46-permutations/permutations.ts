function permute(nums: number[]): number[][] {
    const result = []
    function recurse(combine: number[]) {
        if(combine.length === nums.length) {
            result.push([...combine])
            return;
        }
        for(const n of nums) {
            if(combine.findIndex((i)=>i === n) === -1) {
                combine.push(n)
                recurse(combine)
                combine.pop()
            }
        }
    }
    recurse([])
    return result;
};