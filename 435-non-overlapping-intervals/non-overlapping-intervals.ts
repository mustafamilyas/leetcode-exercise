function eraseOverlapIntervals(intervals: number[][]): number {
    intervals.sort((a,b)=>a[0]-b[0] || a[1]-b[1])
    let counter = 0;
    let prevI = 0;
    for(let i = 1; i < intervals.length; i++) {
        if(intervals[prevI][1] > intervals[i][0]) {
            if(intervals[prevI][1] >= intervals[i][1]) {
                prevI = i
            }
            counter++;
        } else {
            prevI = i
        }
    }
    return counter;
};