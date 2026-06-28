function maximumElementAfterDecrementingAndRearranging(arr: number[]): number {
    const maxValue = arr.length;
    const count = new Array(maxValue + 1).fill(0);
    for(let i = 0; i < maxValue; i++) {
        count[Math.min(maxValue, arr[i])]++;
    }
    let res = 1;
    for(let i = 2; i <= maxValue; i++) {
        res = Math.min(i, res + count[i])
    }

    return res;
};