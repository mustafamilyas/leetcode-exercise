function threeSum(nums: number[]): number[][] {
    const sortedNums = nums.sort((a, b)=>a- b);
    const result = [];
    
    for(let current = 0; current < sortedNums.length && sortedNums[current] <= 0 ; current++) {
        if(current > 0 && sortedNums[current] === sortedNums[current - 1]) continue;
        
        let lo = current + 1;
        let hi = nums.length - 1;
        
        while(lo < hi) {
            const currentSum = sortedNums[current] + sortedNums[lo] + sortedNums[hi];
            
            if(currentSum > 0) {
                hi--;
            } else if(currentSum < 0) {
                lo++;
            } else {
                result.push([sortedNums[current] , sortedNums[lo] , sortedNums[hi]])
                lo++
                while(lo < hi && sortedNums[lo] === sortedNums[lo - 1]){
                    lo++
                }
            }
        }
        
    }
    return result;
};