function threeSumClosest(nums: number[], target: number): number {
    let closest = Number.MAX_SAFE_INTEGER;
    nums.sort((a,b)=>a-b);

    for(let cur = 0; cur < nums.length - 2; cur++) {
        let low = cur + 1;
        let high = nums.length - 1;

        while(low < high) {
            const sum = nums[cur] + nums[low] + nums[high];
            if (sum === target) return target;
            if (sum > target) high--
            else low++
            
            if(Math.abs(closest - target) > Math.abs(sum - target)) closest = sum;
        }
    }
    return closest;
};