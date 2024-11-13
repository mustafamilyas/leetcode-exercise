function countFairPairs(nums: number[], lower: number, upper: number): number {
    let counter = 0, l = 0, lr = nums.length, ur = nums.length;
    nums.sort((a, b)=>a - b);
    for(let l = 0; l < ur; l++) {
        while(l < lr && nums[l] + nums[lr - 1] >= lower) {
            lr--
        }

        lr = Math.max(lr, l + 1)
        while(l < ur && nums[l] + nums[ur - 1] > upper) {
            ur--
        }
        if(l < ur && nums[l] + nums[lr] >= lower && nums[l] + nums[ur - 1] <= upper) {
            counter += (ur - lr)
        } 
    }
    return counter;        
};