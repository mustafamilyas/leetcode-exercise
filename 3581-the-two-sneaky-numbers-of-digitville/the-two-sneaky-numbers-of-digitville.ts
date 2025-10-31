function getSneakyNumbers(nums: number[]): number[] {
    const set = new Set();
    const res = [];
    for(const v of nums) {
        if(set.has(v)) res.push(v);
        set.add(v)
    }
    return res
};