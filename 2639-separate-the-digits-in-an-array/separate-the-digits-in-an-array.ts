function separateDigits(nums: number[]): number[] {
    return nums.flatMap((n)=>{
        const res = [];
        const highest = Math.floor(Math.log10(n));
        for(let i = highest; i >= 0; i--) {
            const cur = Math.floor(n / (10 ** i)) 
            res.push(cur);
            n -= cur * (10 ** i)
        }
        return res;
    })
};