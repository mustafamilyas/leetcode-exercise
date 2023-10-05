function canJump(nums: number[]): boolean {
    let maxJump = 0;
    for(let i = 0; i < nums.length - 1; i++) {
        const nextJump = i + nums[i];
        if(maxJump <= nextJump && i === nextJump) return false;
        maxJump = Math.max(nextJump, maxJump)
    }
    return true;
};