function canSortArray(nums: number[]): boolean {
    let l = -1, r = 0, setbit = -1;
    for(;r <= nums.length; r++) {
        const cursetbit = getSetBits(nums[r]);
        if(cursetbit === setbit) continue
        else {
            if (l > -1) {
                const slice = nums.slice(l, r);
                slice.sort((a,b)=>a-b);
                for(let i = 0; i < slice.length; i++) {
                    nums[l + i] = slice[i]
                }
            }
            setbit = cursetbit
            l = r;
        }
    }
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] < nums[i - 1]) return false;
    }
    return true;
};

function getSetBits(num: number): number {
    if(!num) return 0
    let setbit = 0;
    while(num > 1) {
        const next = num >> 1
        setbit += (num - (next * 2))
        num = next
    }
    return setbit + num;
}