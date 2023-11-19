function reductionOperations(nums: number[]): number {
    nums.sort((a,b)=>b-a);
    let operation = 0;
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] !== nums[i - 1]) {
            operation += i;
        }
    }
    return operation;
};