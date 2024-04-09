function timeRequiredToBuy(tickets: number[], k: number): number {
    let time = 0;
    for(let i = 0; i < tickets.length; i++) {
        if(i <= k) time += Math.min(tickets[i], tickets[k])
        else       time += Math.min(tickets[i], tickets[k] - 1)
    }
    return time
};

// 4 5 2 3 5 - 3
// 2 3 0 1 3 = 10
13