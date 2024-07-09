function averageWaitingTime(customers: number[][]): number {
    let time = 0, waitingTime = 0;
    for(const [start, processTime] of customers) {
        if(time <= start) {
            waitingTime += processTime
            time = start + processTime
        } else {
            waitingTime += (time - start) + processTime
            time += processTime
        }
    }
    return waitingTime / customers.length;
};