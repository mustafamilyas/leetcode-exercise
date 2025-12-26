function bestClosingTime(customers: string): number {
    const closePenalty = Array.from({length: customers.length + 1}, () => 0);
    let penalty = 0;
    for(let i = customers.length - 1; i >= 0; i--) {
        if(customers[i] == 'Y') penalty++
        closePenalty[i] = penalty
    }
    penalty = 0;
    let min = -1, minTotal = Number.MAX_SAFE_INTEGER;
    for(let i = 0; i <= customers.length; i++) {
        const totalPenalty = penalty + closePenalty[i];
        if(totalPenalty < minTotal) {
            min = i
            minTotal = totalPenalty
        };
        if(customers[i] == 'N') penalty++
    }
    return min;
};