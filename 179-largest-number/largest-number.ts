function largestNumber(nums: number[]): string {
    const sNums = nums.map((n)=>n.toString())
    sNums.sort((a, b)=>(b + a).localeCompare(a + b))
    if(sNums[0] === '0') return '0'
    return sNums.join('');
};