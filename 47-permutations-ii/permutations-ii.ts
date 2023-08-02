function permuteUnique(nums: number[]): number[][] {
    const result = []
    const seen = new Set<string>();
    function recurse(combineIndex: Set<number>) {
        if(combineIndex.size === nums.length) {
            const arrayForm = Array.from(combineIndex).map((i)=>nums[i]);
            const key = arrayForm.join(':')
            if(seen.has(key)) return;
            result.push(arrayForm)
            seen.add(key)
            return;
        }
        for(let i = 0; i < nums.length; i++) {
            if(!combineIndex.has(i)) {
                combineIndex.add(i)
                recurse(combineIndex)
                combineIndex.delete(i)
            }
        }
    }
    recurse(new Set())
    return result;
};