function maxScoreSightseeingPair(values: number[]): number {
    const rightValues = new Array(values.length);
    rightValues[values.length - 1] = values[values.length - 1] - values.length + 1
    for(let i = values.length - 2; i > 0; i--) {
        rightValues[i] = Math.max(rightValues[i + 1], values[i] - i)
    }
    let max = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i < values.length - 1; i++) {
        max = Math.max(max, values[i] + i + rightValues[i + 1])
    }
    return max;
};