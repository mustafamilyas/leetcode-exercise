function maximumHappinessSum(happiness: number[], k: number): number {
    happiness.sort((a,b)=>b - a);
    let total = 0;
    for(let i = 0; i < k; i++) {
        total += Math.max(happiness[i] - i, 0)
    }
    return total
};