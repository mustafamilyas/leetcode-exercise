function removeElement(nums: number[], val: number): number {
    let index = 0;
    for(const n of nums) {
        if(n !== val) {
            nums[index++] = n;
        }
    }
    return index;
};