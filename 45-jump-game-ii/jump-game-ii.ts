function jump(nums: number[]): number {
    if(nums.length <= 1) return 0;

    let iteration = 0;
    let prevLongestJump = 0;
    let nextLongestJump = nums[0];

    while(prevLongestJump < nextLongestJump && prevLongestJump < nums.length - 1) {
        iteration++
        let localMax = prevLongestJump + 1;
        for(let i = prevLongestJump + 1; i <= nextLongestJump && i < nums.length; i++) {
            localMax = Math.max(i + nums[i], localMax);
        }
        prevLongestJump = nextLongestJump;
        nextLongestJump = localMax;
    }

    return iteration;
};