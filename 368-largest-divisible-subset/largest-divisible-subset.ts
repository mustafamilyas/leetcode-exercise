function largestDivisibleSubset(nums: number[]): number[] {
    nums.sort((a,b)=>a-b)
    const map = new Map<number, number[]>();
    let longestKey = nums[0];
    for(let k = 0; k < nums.length; k++) {
        const currentNum = nums[k]
        map.set(currentNum, [currentNum])
        for(let i = k - 1; i >= 0; i--) {
            const divisorNum = nums[i]
            if(currentNum % divisorNum === 0 && map.get(divisorNum).length + 1 > map.get(currentNum).length) {
                map.set(currentNum, [...(map.get(divisorNum) || []), currentNum])
                if(map.get(currentNum).length > (map.get(longestKey)?.length ?? 0)) {
                    longestKey = currentNum
                }
            }
        }
    }
    return map.get(longestKey)
};