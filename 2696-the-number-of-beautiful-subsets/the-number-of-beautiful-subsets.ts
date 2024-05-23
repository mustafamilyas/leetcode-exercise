function beautifulSubsets(nums: number[], k: number): number {
    let counter = 0;
    
    function backtrack(combine: Map<number, number>, nextIdx: number, size: number) {
        if (nextIdx === nums.length) {
            counter++;
            return;
        }
        const curNumber = nums[nextIdx]
        if (size === 0 || (!combine.get(curNumber - k) && !combine.get(curNumber + k))) {
            combine.set(curNumber, (combine.get(curNumber) ?? 0) + 1);
            backtrack(combine, nextIdx + 1, size + 1);
            combine.set(curNumber, (combine.get(curNumber) ?? 0) - 1);
        }
        backtrack(combine, nextIdx + 1, size);
    }

    backtrack(new Map<number, number>(), 0, 0);
    return counter - 1;
};