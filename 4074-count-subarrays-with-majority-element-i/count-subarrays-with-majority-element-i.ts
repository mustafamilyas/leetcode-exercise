function countMajoritySubarrays(nums: number[], target: number): number {
    let res = 0;
    for(let i = 0; i < nums.length; i++) {
        let count = 0;
        for(let k = i; k < nums.length; k++) {
            count += nums[k] == target ? 1 : -1;
            if(count > 0) res++;
        }
    }
    return res;
};

/*
1 2 2 3 3 3 3 3 2
0 1 2 2 2 2 2 2 3
*/