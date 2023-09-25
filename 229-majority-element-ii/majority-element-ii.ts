function majorityElement(nums: number[]): number[] {
    const counter = new Map<number, number>();
    const result = new Set<number>();
    const third = nums.length / 3;

    for(let i = 0; i < nums.length; i++) {
        const newC = (counter.get(nums[i]) ?? 0) + 1;
        counter.set(nums[i], newC);

        if(newC > third) result.add(nums[i])
    }

    return Array.from(result)
};