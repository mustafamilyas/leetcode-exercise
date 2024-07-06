function distanceBetweenBusStops(distance: number[], start: number, destination: number): number {
    const sum = distance.reduce((a,b)=>a+b, 0);
    const trueStart = Math.min(start, destination);
    const trueEnd = Math.max(start, destination);
    let dist = 0;
    for(let i = trueStart; i < trueEnd; i++) {
        dist += distance[i]
    }
    return Math.min(dist, sum - dist)
};