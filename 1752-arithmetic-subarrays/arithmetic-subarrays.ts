function checkArithmeticSubarrays(nums: number[], l: number[], r: number[]): boolean[] {
    return l.map((left, index)=>{
        const right = r[index]
        const localLength = right - left + 1
        if(localLength <= 2) return true;
        let max = nums[left], min = nums[left];
        for(let i = left; i <= right; i++) {
            max = Math.max(max, nums[i])
            min = Math.min(min, nums[i])
        }
        const diff = (max - min) / (localLength - 1);
        const checkArray = new Array(localLength).fill(false);

        for(let i = left; i <= right; i++) {
            const localDiff = nums[i] - min;
            if(localDiff % diff) return false;
            checkArray[diff ? localDiff / diff : 0] = true;
        }
        const sequenceLength = checkArray.filter(i => i).length
        return sequenceLength === 1 || sequenceLength === localLength;
    })
};