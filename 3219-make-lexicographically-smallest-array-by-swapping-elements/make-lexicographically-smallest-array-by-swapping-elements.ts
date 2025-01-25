function lexicographicallySmallestArray(nums: number[], limit: number): number[] {
    const _n = nums.map((n, i)=>[n, i]);
    _n.sort((a, b)=>a[0]-b[0]);

    for(let i = 0; i < nums.length;) {
        let j = i + 1;
        while(j < nums.length && _n[j][0] - _n[j - 1][0] <= limit) {
            j++;
        }
        const v = _n.slice(i, j).map((e)=>e[0])
        const indices = _n.slice(i, j).map((e)=>e[1]);
        indices.sort((a, b)=>a-b);
        for(let idx = 0; idx < v.length; idx++) {
            nums[indices[idx]] = v[idx];
        }
        i = j;
    }
    return nums;
};