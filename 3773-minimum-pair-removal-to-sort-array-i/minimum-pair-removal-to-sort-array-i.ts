function minimumPairRemoval(nums: number[]): number {
    const oriLength = nums.length;
    while(nums.length > 1) {
        let isAscending = true;
        let minSum = Number.MAX_SAFE_INTEGER;
        let minIdx = -1;
        for(let i = 0; i < nums.length - 1; i++) {
            if(nums[i + 1] < nums[i]) {
                isAscending = false;
            }
            const curSum = nums[i] + nums[i + 1] 
            if(minSum > curSum) {
                minSum = curSum;
                minIdx = i;
            }
        }
        if(isAscending) break;
        nums.splice(minIdx, 2, minSum);
    }
    return oriLength - nums.length;
};


/*

5  2  3  1  6  8  2

0  0  0  0  4  5  5
5  6  6 10

10 2 11 12
2,
7,2,6,10,2,1,11,14,15,16
9 8 11 12 3 12 25 29 31

7,2,6,10,3,11,14,15,16
9 8 11 13 13 25 29 31

7,8,10,3,11,14,15,16
15 18 13 13 25 29 31

15,13,11,14,15,16
28 24 25 29 31

15,24,29,16
39 38 4 31


*/