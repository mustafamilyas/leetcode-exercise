function minimumDeletions(nums: number[]): number {
    const n = nums.length;
    let minIndex = 0, maxIndex = 0;
    for(let i = 1; i < n; i++) {
        if(nums[minIndex] > nums[i]) minIndex = i;
        if(nums[maxIndex] < nums[i]) maxIndex = i;
    }
    if(minIndex > maxIndex) {
        const temp = minIndex;
        minIndex = maxIndex;
        maxIndex = temp;
    }
    return Math.min(maxIndex + 1, n - minIndex, minIndex + 1 + n - maxIndex)
};


// a = 1 b = 5
// 