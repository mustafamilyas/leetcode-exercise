function maxDistance(arrays: number[][]): number {
    const maxMin = [];
    for(let i = 0; i < arrays.length; i++) {
        const cur = arrays[i]
        maxMin.push([cur[0], i]);
        if(cur.length > 1) maxMin.push([cur[cur.length - 1], i]);
    }

    maxMin.sort((a, b)=>a[0] - b[0]);
    let min = 0, max = maxMin.length - 1;
    if(maxMin[min][1] === maxMin[max][1]) {
        const nextMinAbs = Math.abs(maxMin[min + 1][0] - maxMin[min][0])
        const nextMaxAbs = Math.abs(maxMin[max][0] - maxMin[max - 1][0])
        if(nextMinAbs < nextMaxAbs) min++
        else max--
    }
    return maxMin[max][0] - maxMin[min][0]
};