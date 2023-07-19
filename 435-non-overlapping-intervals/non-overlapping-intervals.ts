function eraseOverlapIntervals(intervals: number[][]): number {
    intervals.sort((a,b)=>a[1]-b[1])
    let counter = 0;
    let prevEnd = Number.MIN_SAFE_INTEGER;
    for(const [curStart, curEnd] of intervals) {
        if(prevEnd <= curStart) {
            prevEnd = curEnd
        } else {
            counter++
        }
    }
    return counter;
};