function validPartition(nums: number[]): boolean {
    const memo = {}
    function dp(start: number): boolean {
        if(start === nums.length) return true;
        if(nums.length - start < 2) return false;
        if(memo[start] !== undefined) return memo[start];

        const con1 = nums[start] === nums[start + 1];
        const con2 = con1 && nums[start] === nums[start + 2];
        const con3 = nums[start + 1] - nums[start] === 1 && nums?.[start + 2] - nums[start + 1] === 1;
        let result = false;
        if(con1) {
            result ||= dp(start + 2);
            if(con2) {
                result ||= dp(start + 3);
            }
        } else if(con3){
            result ||= dp(start + 3)
        }
        memo[start] = result;
        return memo[start];
    }
    return dp(0)
};