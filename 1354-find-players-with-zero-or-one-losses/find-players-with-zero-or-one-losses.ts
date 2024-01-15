function findWinners(matches: number[][]): number[][] {
    const record = new Map<number, number>();
    for(const [winner, loser] of matches) {
        if(!record.has(winner)) record.set(winner, 0);
        if(!record.has(loser)) record.set(loser, 1);
        else record.set(loser, record.get(loser) + 1)
    }
    const result  = [[], []]
    for(const [key, value] of record.entries()) {
        if(value === 0) {
            result[0].push(key)
        } else if (value === 1) {
            result[1].push(key)
        }
    }
    result[0].sort((a,b)=>a-b)
    result[1].sort((a,b)=>a-b)
    return result;
};