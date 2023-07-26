function minSpeedOnTime(dist: number[], hour: number): number {
    if(Math.ceil(hour) < dist.length) return -1;
    const memo = {}
    function getTimeBySpeed(speed: number): number {
        if(typeof memo[speed] === 'number') return memo[speed]
        let sum = 0;
        for(let i = 0; i < dist.length - 1; i++) {
            sum += Math.ceil(dist[i]/speed);
        }
        memo[speed] = sum + ((dist[dist.length - 1]) / speed);
        return memo[speed];
    }
    let start = 1, end = 10000000, minSpeed = -1;
    while(start <= end) {
        const mid = start + Math.ceil((end - start) / 2)
        const midTime = getTimeBySpeed(mid);
        if(midTime === hour) return mid
        if(midTime >= hour) {
            start = mid + 1
        } else {
            minSpeed = mid
            end = mid - 1;
        }
    }
    return minSpeed;
};