function findWinners(matches: number[][]): number[][] {
    const record: Record<number, number> = {};
    for(const [winner, loser] of matches) {
        if(record[winner] == undefined) record[winner] = 0;
        if(record[loser] == undefined) record[loser] = 1;
        else record[loser]++
    }
    const result  = [[], []]
    for(const [key, value] of Object.entries(record)) {
        if(value === 0) {
            result[0].push(parseInt(key))
        } else if (value === 1) {
            result[1].push(parseInt(key))
        }
    }
    return result;
};