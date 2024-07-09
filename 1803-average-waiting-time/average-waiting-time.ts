function averageWaitingTime(customers: number[][]): number {
    let time = 0, waitingTime = 0;
    for(let i = 0; i < customers.length; i++) {
        const [start, processTime] = customers[i]
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