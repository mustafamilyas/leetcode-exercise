function findMinArrowShots(points: number[][]): number {
    points.sort((a,b)=>a[1]-b[1]);
    let window = points[0];
    let arrow = 1;
    for(let i = 1; i < points.length; i++) {
        const curPoint = points[i]
        if(curPoint[0] <= window[1]) {
            window = [Math.max(curPoint[0], window[0]), Math.min(curPoint[1], window[1])]
        } else {
            window = points[i];
            arrow++
        }
    }
    return arrow;
};