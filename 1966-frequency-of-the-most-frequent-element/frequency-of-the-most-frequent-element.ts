function maxFrequency(nums: number[], k: number): number {
    nums.sort((a,b)=>a-b);
    let left = 0;
    let max = 0;
    let sum = 0;
        
    for (let right = 0; right < nums.length; right++) {
        let target = nums[right];
        sum += target;
            
        while ((right - left + 1) * target - sum > k) {
            sum -= nums[left];
            left++;
        }
            
        max = Math.max(max, right - left + 1);
    }
        
    return max;
};