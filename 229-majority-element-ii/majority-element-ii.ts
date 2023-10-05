function majorityElement(nums: number[]): number[] {
    nums.sort((a,b)=>a-b);
    const result = [];
    const third = nums.length / 3;
    let counter = 1;

    for(let i = 1; i < nums.length; i++) {
        if(nums[i] === nums[i - 1]) counter++;
        else {
            if(counter > third) {
                result.push(nums[i - 1]);
            }
            counter = 1;
        }
    }

    if(counter > third) {
        result.push(nums[nums.length - 1]);
    }

    return Array.from(result)
};