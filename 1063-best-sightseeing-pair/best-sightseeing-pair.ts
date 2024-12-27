function maxScoreSightseeingPair(values: number[]): number {
    let rValue = values[values.length - 1] - values.length + 1
    let max = Number.MIN_SAFE_INTEGER;
    for(let i = values.length - 2; i >= 0; i--) {
        max = Math.max(max, values[i] + i + rValue)
        rValue = Math.max(rValue, values[i] - i)
    }
    return max;
};