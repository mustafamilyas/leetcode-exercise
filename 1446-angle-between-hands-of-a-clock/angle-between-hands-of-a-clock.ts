function angleClock(hour: number, minutes: number): number {
    const minDegreeFrom0 = minutes * 6
    const hourDegreeFrom0 = (hour % 12) * 30 + (minutes / 60) * 30
    const inDegree = Math.max(minDegreeFrom0 - hourDegreeFrom0, hourDegreeFrom0 - minDegreeFrom0);
    const outDegree = 360 - inDegree; 
    return Math.min(inDegree, outDegree);
};