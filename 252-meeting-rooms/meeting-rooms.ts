function canAttendMeetings(intervals: number[][]): boolean {
    intervals.sort((a,b)=>a[0] - b[0]);
    let end = -1;
    for(const [curStart, curEnd] of intervals) {
        if(curStart < end) {
            return false
        } else {
            end = Math.max(end, curEnd)
        }
    }
    return true;
};