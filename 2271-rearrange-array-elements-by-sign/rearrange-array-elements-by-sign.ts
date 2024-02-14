function rearrangeArray(nums: number[]): number[] {
    const res = new Array(nums.length)
    let posIdx = -2, negIdx = -1;
    for(const n of nums) {
        if(n >= 0) res[posIdx+=2] = n;
        else res[negIdx+=2] = n
    }
    return res;
};