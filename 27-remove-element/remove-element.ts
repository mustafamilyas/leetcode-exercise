function removeElement(nums: number[], val: number): number {
    let swappedIndex = nums.findIndex((n) => n === val)
    if(swappedIndex === -1) return nums.length;
    for(let i = swappedIndex + 1; i < nums.length; i++) {
        if(nums[i] !== val) {
            const temp = nums[i];
            nums[i] = nums[swappedIndex];
            nums[swappedIndex] = temp;
            swappedIndex++
        }
    }
    return swappedIndex
};