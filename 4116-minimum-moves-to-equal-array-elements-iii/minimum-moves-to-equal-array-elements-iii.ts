function minMoves(nums: number[]): number {
    let moves = 0, max = nums[0];
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] <= max) {
            moves += max - nums[i];
        } else {
            moves += i * (nums[i] - max);
            max = nums[i]
        }
    }
    return moves;
};