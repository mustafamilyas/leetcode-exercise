function minSubarray(nums: number[], p: number): number {
    const mod = {};
    let sum = nums.reduce((a,b)=>a+b, 0), lsum = 0, min = nums.length;
    if(sum % p === 0) return 0;
    mod[0] = -1; 
    for(let i = 0; i < nums.length; i++) {
        sum -= nums[i]
        lsum += nums[i]
        mod[lsum % p] = i;
        const target = (p - (sum % p)) % p;
        if(mod[target] !== undefined) min = Math.min(min, i - mod[target])
    }
    return min === nums.length ? -1 : min;
};