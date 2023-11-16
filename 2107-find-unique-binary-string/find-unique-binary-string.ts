function findDifferentBinaryString(nums: string[]): string {
    let result = '';

    // we know that the length of each nums the same as nums length
    // we can just take the diagonal and flip the bit to make a unique string
    for(let i = 0; i < nums.length; i++) {
        result += (nums[i][i] === '0') ? '1' : '0'
    }

    return result;
};