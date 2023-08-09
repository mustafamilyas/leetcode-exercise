function minimizeMax(nums: number[], p: number): number {
    if(nums.length < 2) return 0;
    nums.sort((a,b)=>a-b);

    function countThreshold(threshold: number): number {
        let counter = 0;
        for(let i = 1; i < nums.length; i++) {
            if(nums[i] - nums[i - 1] <= threshold) {
                counter++;
                i++
            } 
        }
        return counter;
    }
    
    let start = 0;
    let end = nums[nums.length - 1] - nums[0];

    while(start <= end) {
        const mid = start + Math.ceil((end - start) / 2);
        const midCounter = countThreshold(mid);
        if(midCounter >= p) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return start;
};