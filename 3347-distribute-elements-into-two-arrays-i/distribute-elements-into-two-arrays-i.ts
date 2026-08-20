function resultArray(nums: number[]): number[] {
    const res = [], res2 = [];
    for(let i = 0; i < nums.length; i++) {
        if(res.length == 0 || res2.length == 0) {
            if(i % 2) res2.push(nums[i])
            else res.push(nums[i])
        } else {
            if(res[res.length - 1] > res2[res2.length - 1]) res.push(nums[i])
            else res2.push(nums[i])
        }
    }
    return [...res, ...res2]
};