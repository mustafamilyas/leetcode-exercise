function findMinArrowShots(points: number[][]): number {
    points.sort((a,b)=>a[1]-b[1]);
    let curEnd = points[0][1];
    let arrow = 1;
    for(let i = 1; i < points.length; i++) {
        if(points[i][0] > curEnd) {
            curEnd = points[i][1];
            arrow++
        }
    }
    return arrow;
};