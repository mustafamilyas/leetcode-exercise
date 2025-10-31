function countValidSelections(nums: number[]): number {
    const n = nums.length;
    const left = [];
    let right = [];
    let ls = 0, rs = 0, res = 0;
    for(let i = 0; i < n; i++) {
        left.push(ls += nums[i]);
        right.push(rs += nums[n - i - 1]);
    }
    right = right.reverse();
    for(let i = 0; i < n; i++) {
        if(nums[i] == 0) {
            if(left[i] == right[i]) res += 2;
            else if(Math.abs(left[i] - right[i]) == 1) res += 1;
        }
    }
    return res
};
