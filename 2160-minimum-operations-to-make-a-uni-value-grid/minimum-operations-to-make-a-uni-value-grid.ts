function minOperations(grid: number[][], x: number): number {
    const arr = [];
    let lSum = 0, rSum = 0, prevRangeSum = 0, min = Number.MAX_SAFE_INTEGER, l = 0, r = 0;
    for(const row of grid) {
        for(const cell of row) {
            rSum += cell;
            arr.push(cell);
            if(((arr[0] - cell) % x) != 0) return -1;
        }
    }
    arr.sort((a, b) => a - b);
    while(l < arr.length) {
        while(arr[l] == arr[r]) r++;
        lSum += prevRangeSum;
        prevRangeSum = (r - l) * arr[l];
        rSum -= prevRangeSum;
        const diff = ((arr[l] * l - lSum) + (rSum - (arr[l] * (arr.length - r)))) / x;
        min = Math.min(min, diff);
        l = r;
    }

    return min;
};