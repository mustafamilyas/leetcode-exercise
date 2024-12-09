function isArraySpecial(nums: number[], queries: number[][]): boolean[] {
    let pattern = '1';
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] % 2 == nums[i - 1] % 2) pattern += '0'
        else pattern += '1'
    }
    console.log(pattern)
    return queries.map(([s, e])=> {
        const cur = pattern.slice(s, e + 1);
        return cur === '1'.repeat(e - s + 1) || cur === '0' + '1'.repeat(e - s) 
    })
};