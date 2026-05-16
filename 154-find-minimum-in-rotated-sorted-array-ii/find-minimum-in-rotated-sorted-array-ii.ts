function findMin(nums: number[]): number {
    const n = nums.length;
    if(nums.length == 1) return nums[0];
    
    return dnc(0, n - 1);

    function dnc(l: number, r: number): number {
        if(l == r || nums[l] < nums[r]) return nums[l];
        const mid = Math.trunc((l + r) / 2);
        return Math.min(dnc(l, mid), dnc(mid + 1, r))
    }
};