function findErrorNums(nums: number[]): number[] {
    const set = new Array(nums.length).fill(false);
    let double = -1;
    for(const n of nums) {
        if(set[n - 1]) {
            double = n
        } else {
            set[n - 1] = true;
        }
    }
    return [double, set.findIndex(exist => !exist) + 1]
};