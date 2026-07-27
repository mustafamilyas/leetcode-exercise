function maxProduct(nums: number[]): number {
    let a = -Infinity, b = -Infinity;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > a) {
            b = a;
            a = nums[i]
        } else if(nums[i] > b) b = nums[i]
    }
    return (a - 1) * (b - 1)
};