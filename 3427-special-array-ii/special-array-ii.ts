function isArraySpecial(nums: number[], queries: number[][]): boolean[] {
    const dCountArray = [0]
    let dCount = 0
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] % 2 == nums[i - 1] % 2) dCount++
        dCountArray.push(dCount)
    }
    return queries.map(([s, e])=>dCountArray[s] === dCountArray[e])
};