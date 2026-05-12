function minimumEffort(tasks: number[][]): number {
    tasks.sort((a, b) => {
        const gapa = a[1] - a[0];
        const gapb = b[1] - b[0];
        if(gapa == gapb) {
            return b[1] - a[1]
        }
        return gapb - gapa;
    });
    let energy = 0;
    for(let [actual, min] of tasks) {
        energy += actual;
    }
    let remainingEnergy = energy;
    for(let [actual, min] of tasks) {
        if(min > remainingEnergy) {
            const additional = min - remainingEnergy 
            energy += additional;
            remainingEnergy = remainingEnergy + additional - actual;
        } else {
            remainingEnergy -= actual;
        }
    }
    return energy;
};