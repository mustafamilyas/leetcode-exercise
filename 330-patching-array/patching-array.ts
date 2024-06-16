function minPatches(nums: number[], n: number): number {
    let missingPatch = 1, numMissing = 0, i = 0;
    while(missingPatch <= n) {
        if(i < nums.length && nums[i] <= missingPatch) {
            missingPatch += nums[i++]
        } else {
            missingPatch += missingPatch
            numMissing++
        }
    }
    return numMissing
};

// 1 5 10
// 1 5 6 10 11 15 16

// 4 3 2


// 1 2   3    4 5 6
// 1 2   3    4 5 6
//   3 4 5 5 