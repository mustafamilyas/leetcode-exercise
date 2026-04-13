function getMinDistance(nums: number[], target: number, start: number): number {
    let min = Number.MAX_SAFE_INTEGER;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] == target) min = Math.min(min, Math.abs(i - start));
    }
    return min;
};