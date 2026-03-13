function minNumberOfSeconds(mountainHeight: number, workerTimes: number[]): number {
    const minQueue = new MinPriorityQueue((a) => a[0] * a[1], []); // [workerTimes, mul, iter]
    let maxTimes = 0;
    for(const time of workerTimes) {
        minQueue.enqueue([time, 1, 1])
    };
    for(let i = 0; i < mountainHeight; i++) {
        const [workerTime, mul, iter] = minQueue.dequeue();
        maxTimes = Math.max(maxTimes, workerTime * mul);
        minQueue.enqueue([workerTime, mul + iter + 1, iter + 1]);
    }
    return maxTimes;
};

/*
1
3
6
10

*/