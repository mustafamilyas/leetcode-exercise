function timeRequiredToBuy(tickets: number[], k: number): number {
    let time = 0;
    while(tickets[k]) {
        let min = Number.MAX_SAFE_INTEGER;
        for(const t of tickets) {
            if(t) min = Math.min(t, min)
        }
        for(let i = 0; i < tickets.length; i++) {
            if(tickets[i]) {
                const resolvedMin = tickets[k] === 0 ? min - 1 : min
                time += resolvedMin
                tickets[i] -= resolvedMin
            }
        }
    }
    return time
};

// 4 5 2 3 5 - 3
// 2 3 0 1 3 = 10
13