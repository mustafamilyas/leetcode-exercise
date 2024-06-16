function minPatches(nums: number[], n: number): number {
    let miss = 1, result = 0, i = 0;

    while (miss <= n) {
        if (i < nums.length && nums[i] <= miss) {
            miss += nums[i];
            i++;
        } else {
            miss += miss;
            result++;
        }
    }

    return result;
    
};

// 1 5 10
// 1 5 6 10 11 15 16

// 4 3 2


// 1 2   3    4 5 6
// 1 2   3    4 5 6
//   3 4 5 5 