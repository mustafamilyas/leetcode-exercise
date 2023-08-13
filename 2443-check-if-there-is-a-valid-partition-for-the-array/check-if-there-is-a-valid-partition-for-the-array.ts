function validPartition(nums: number[]): boolean {
    const memo = new Array(nums.length).fill(false);

    memo[1] = nums[0] === nums[1];
    memo[2] = (memo[1] && nums[1] === nums[2]) || (nums[1] - nums[0] === 1 && nums[2] - nums[1] === 1);

    for(let i = 3; i < nums.length; i++) {
        if(memo[i - 2] === false && memo[i - 3] === false) continue;
        let result = false;
        if(memo[i - 2]) {
            result ||= nums[i] === nums[i - 1]
        }
        if(!result && memo[i - 3]) {
            result ||= (nums[i] === nums[i - 1] && nums[i] === nums[i - 2])
            result ||= (nums[i] - nums[i - 1] === 1 && nums[i - 1] - nums[i - 2] === 1)
        }
        memo[i] = result
    }
    return memo[nums.length - 1]
};