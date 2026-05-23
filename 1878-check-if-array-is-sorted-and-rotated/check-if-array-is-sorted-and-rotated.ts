function check(nums: number[]): boolean {
    let rotated = false;
    for(let i = 0; i < nums.length; i++) {
        const prev = i > 0 ? i - 1: nums.length - 1;
        if(nums[i] < nums[prev]) {
            if(rotated) return false;
            rotated = true;
        }
    }
    return true;
};