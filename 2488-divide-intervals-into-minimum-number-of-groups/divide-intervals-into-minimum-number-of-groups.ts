function minGroups(intervals: number[][]): number {
    const concurrent = new Map<number, number>();
    for(const [start, end] of intervals) {
        concurrent.set(start, (concurrent.get(start) ?? 0) + 1)
        concurrent.set(end + 1, (concurrent.get(end + 1) ?? 0) - 1)
    }
    const concurrentIntervals = Array.from(concurrent);
    concurrentIntervals.sort((a,b)=>a[0] - b[0])
    let max = 0, runcount = 0;
    for(let i = 0; i < concurrentIntervals.length; i++) {
        runcount += concurrentIntervals[i][1];
        max = Math.max(max, runcount)
    }
    return max;
};