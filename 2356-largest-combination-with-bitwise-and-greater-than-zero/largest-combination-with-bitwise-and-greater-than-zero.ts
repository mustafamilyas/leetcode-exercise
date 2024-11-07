function largestCombination(candidates: number[]): number {
    const counter = new Array(25).fill(0) // Math.log2(10 ^ 7) ~ 24
    for(let i = 0; i < candidates.length; i++) {
        for(let k = 0; k < counter.length; k++) {
            counter[k] += (((1 << k) & candidates[i]) ? 1 : 0)
        }
    }
    return counter.reduce((a, c)=> Math.max(a, c), 1)
};