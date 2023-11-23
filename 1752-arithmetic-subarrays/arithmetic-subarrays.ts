function checkArithmeticSubarrays(nums: number[], l: number[], r: number[]): boolean[] {
    return l.map((left, index)=>check(nums.slice(left, r[index] + 1)))
};

function check(nums: number[]) {
    if(nums.length <= 2) return true;
    nums.sort((a,b)=>a-b)
    const diff = nums[1] - nums[0];
    for(let i = 2; i < nums.length; i++) {
        if(diff !== nums[i] - nums[i - 1]) return false;
    }
    return true;
}