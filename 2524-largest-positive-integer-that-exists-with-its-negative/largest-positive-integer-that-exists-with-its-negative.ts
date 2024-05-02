function findMaxK(nums: number[]): number {
    const counter = new Array(1000).fill(0);
    let max = -1;
    for(const n of nums) {
        const index = Math.abs(n) - 1;
        if(counter[index] === 0 && n > 0) counter[index] = 1
        else if (counter[index] === 0) counter[index] = 2
        else if((counter[index] === 1 && n < 0) || (counter[index] === 2 && n > 0)) counter[index] = 3
        if(counter[index] === 3) max = Math.max(max, Math.abs(n))
    }
    return max
};