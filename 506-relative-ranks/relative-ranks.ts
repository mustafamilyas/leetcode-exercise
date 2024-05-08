function findRelativeRanks(score: number[]): string[] {
    const scoreSorted = [...score]
    const scoreToRank = new Map();
    const result = []

    scoreSorted.sort((a,b)=>b-a)
    for(let i = 0; i < scoreSorted.length; i++) {
        scoreToRank.set(scoreSorted[i], i)
    }
    for(const n of score) {
        const rank = scoreToRank.get(n);
        if(rank === 0) result.push('Gold Medal')
        else if(rank === 1) result.push('Silver Medal')
        else if(rank === 2) result.push('Bronze Medal')
        else result.push(rank + 1 + '')
    }
    return result;
};