function findWinners(matches: number[][]): number[][] {
    const record = new Map<number, number>();
    let start = Number.MAX_SAFE_INTEGER, end = Number.MIN_SAFE_INTEGER;
    for(const [winner, loser] of matches) {
        if(!record.has(winner)) record.set(winner, 0);
        if(!record.has(loser)) record.set(loser, 1);
        else record.set(loser, record.get(loser) + 1)
        start = Math.min(start, winner, loser)
        end = Math.max(end, winner, loser)
    }
    const result  = [[], []]
    for(let key = start; key <= end; key++) {
        const value = record.get(key)
        if(value == 0) result[0].push(key)
        else if(value == 1) result[1].push(key)
    }
    return result;
};