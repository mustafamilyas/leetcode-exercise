function maxPoints(points: number[][]): number {
    let result = [...points[0]];

    for(let i = 1; i < points.length; i++) {
        const nextResult = [...result]
        for(let k = 0; k < result.length; k++) {
            nextResult[k] = Math.max(nextResult[k], result[k] + points[i][k])
        }
        let max = result[0];
        for(let k = 1; k < result.length; k++) {
            nextResult[k] = Math.max(nextResult[k], points[i][k] + max - 1)
            max = Math.max(max - 1, result[k])
        }
        max = result[result.length - 1]
        for(let k = result.length - 2; k >= 0; k--) {
            nextResult[k] = Math.max(nextResult[k], points[i][k] + max - 1)
            max = Math.max(max - 1, result[k])
        }        
        result = nextResult;
    }
    return Math.max(...result)
};