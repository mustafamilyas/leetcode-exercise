function merge(intervals: number[][]): number[][] {
    intervals.sort((a, b)=>a[0]-b[0]);
    const result =[];
    let min = intervals[0][0];
    let max = intervals[0][1];

    for(let i = 1; i < intervals.length; i++) {
        const [curMin, curMax] = intervals[i];
        if(max < curMin) {
            result.push([min, max])
            min = curMin;
            max = curMax;
        } else {
            max = Math.max(max, curMax);
        }
    }
    result.push([min, max])
    return result;
};