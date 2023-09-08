function generate(numRows: number): number[][] {
    const result = [[1]];

    for(let i = 1; i < numRows; i++) {
        const prevGenerated = result[i - 1];
        const curGenerated = [];
        for(let k = 0; k <= prevGenerated.length; k++) {
            curGenerated.push((prevGenerated[k - 1] ?? 0) + (prevGenerated[k] ?? 0))
        }
        result.push(curGenerated)
    }

    return result;
};