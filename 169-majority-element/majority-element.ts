function majorityElement(nums: number[]): number {
    let counter = 1;
    let curNum = nums[0];

    for(let i = 1; i < nums.length; i++) {
        if(curNum === nums[i]) {
            counter++
        } else if(counter > 1) {
            counter--
        } else {
            curNum = nums[i]
            counter = 1
        }
    }

    return curNum
};