function groupThePeople(groupSizes: number[]): number[][] {
    const map: Record<number, number[]> = {};
    for(let i = 0; i < groupSizes.length; i++) {
        const g = groupSizes[i]
        if(map[g]) map[g].push(i)
        else map[g] = [i];
    }

    const result = [];
    Object.entries(map).forEach(([key, value])=> {
        const keyInt = parseInt(key)
        for(let i = 0; i < value.length; i += keyInt) {
            result.push(value.slice(i, i + keyInt))
        }

    })
    return result;
};