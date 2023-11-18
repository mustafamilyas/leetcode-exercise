function maxFrequency(nums: number[], k: number): number {
    nums.sort((a,b)=>b-a);
    let max = 1;

    for(let pivot = 0; pivot < nums.length - 1; pivot++) {
        if(nums[pivot] === nums[pivot - 1]) continue;
        let end = pivot + 1;
        let remaining = k
        for(; end < nums.length; end++) {
            remaining -= (nums[pivot] - nums[end])
            if(remaining < 0) break;
        }
        max = Math.max(max, end - pivot)
    }

    return max;
};