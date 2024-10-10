function maxWidthRamp(nums: number[]): number {
    const stack = [[0, nums[0]]]
    let ramp = 0;
    for(let i = 1; i < nums.length; i++) {
        if(stack[stack.length - 1][1] > nums[i]) stack.push([i, nums[i]])
        else {
            let left = i;
            for(let k = stack.length - 1; k >= 0 && stack[k][1] <= nums[i]; k--) {
                left = stack[k][0]
            }
            ramp = Math.max(ramp, i - left)
        }
    }
    return ramp
};