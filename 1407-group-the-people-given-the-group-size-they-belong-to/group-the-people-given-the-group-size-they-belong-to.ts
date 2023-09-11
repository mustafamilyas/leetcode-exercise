function groupThePeople(groupSizes: number[]): number[][] {
    const map: Record<number, number[]> = {};
    const result = [];
    for(let i = 0; i < groupSizes.length; i++) {
        const g = groupSizes[i]
        if(map[g]) map[g].push(i)
        else map[g] = [i];

        if(map[g].length === g) {
            result.push(map[g])
            map[g] = []
        }
    }
    return result;
};