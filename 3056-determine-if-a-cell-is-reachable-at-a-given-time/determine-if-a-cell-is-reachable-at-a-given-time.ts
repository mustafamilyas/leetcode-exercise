function isReachableAtTime(sx: number, sy: number, fx: number, fy: number, t: number): boolean {
    // edge case when the starting position equal to end position
    // either stay or move atleast 2 times
    if(sx === fx && sy === fy) {
        return t !== 1
    }
    const diffX = Math.abs(fx - sx) - 1;
    const diffY = Math.abs(fy - sy) - 1;
    const minTime = Math.max(diffX, diffY) + 1;
    return t >= minTime;
};