function removeCoveredIntervals(intervals: number[][]): number {
    intervals.sort((a, b)=> {
        if(a[0] == b[0]) return b[1] - a[1]
        return a[0] - b[0]
    });
    let removed = 0;
    let prev = 0;
    for(let i = 1; i < intervals.length; i++) {
        const pe = intervals[prev][1];
        const ne = intervals[i][1];
        if(ne <= pe) removed++
        else prev = i;
    }
    return intervals.length - removed;
};