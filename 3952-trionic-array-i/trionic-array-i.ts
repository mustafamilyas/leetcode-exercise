function isTrionic(nums: number[]): boolean {
    if(nums.length < 4 || nums[1] <= nums[0]) return false;
    let asc = true, part = 1;
    for(let i = 1; i < nums.length - 1; i++) {
        if(nums[i] == nums[i + 1] || part > 3) return false;
        if((asc && nums[i] < nums[i + 1]) || (!asc == nums[i] > nums[i + 1])) continue;
        part++;
        asc = !asc;
    }
    return part == 3;
};