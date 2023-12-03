function minTimeToVisitAllPoints(points: number[][]): number {
    let times = 0;

    for(let i = 1; i < points.length; i++) {
        const diffX = Math.abs(points[i][0] - points[i - 1][0])
        const diffY = Math.abs(points[i][1] - points[i - 1][1])
        times += Math.max(diffX, diffY);
    }
    return times;
};