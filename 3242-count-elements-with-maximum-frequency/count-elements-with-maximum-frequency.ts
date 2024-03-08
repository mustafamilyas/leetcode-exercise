function maxFrequencyElements(nums: number[]): number {
    const counter = new Array(100).fill(0);
    for(const n of nums) {
        counter[n - 1]++
    }

    let maxCount = counter[0];
    let cumulativeCount = 0;
    for(let i = 0; i < counter.length; i++) {
        if(counter[i] > maxCount) {
            maxCount = counter[i]
            cumulativeCount = maxCount
        } else if (counter[i] === maxCount) {
            cumulativeCount += maxCount;
        }
    }
    return cumulativeCount
};