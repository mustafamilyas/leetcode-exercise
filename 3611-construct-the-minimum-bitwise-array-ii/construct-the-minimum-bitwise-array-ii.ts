function minBitwiseArray(nums: number[]): number[] {
    return nums.map((n)=>{
        let ans = -1;
        let next = 1;
        while((n & next) != 0) {
            ans = n - next;
            next <<= 1;
        }
        return ans;
    })
};