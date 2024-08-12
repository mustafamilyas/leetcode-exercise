function fourSum(nums: number[], target: number): number[][] {
    const result = [];
    const distinct = new Set<string>();
    nums.sort((a, b)=> a - b)
    for(let i = 0; i < nums.length - 3; i++) {
        for(let j = i + 1; j < nums.length - 2; j++) {
            let low = j + 1;
            let high = nums.length - 1;

            while(low < high) {
                const sum = nums[i] + nums[j] + nums[low] + nums[high];
                if(sum > target) high--
                else if (sum < target) low++
                else {
                    const pair = [nums[i], nums[j], nums[low], nums[high]];
                    const key = pair.join(":")
                    low++
                    if(distinct.has(key)) continue;
                    result.push(pair)
                    distinct.add(key)
                }
            }
        }
    }
    return result;
};