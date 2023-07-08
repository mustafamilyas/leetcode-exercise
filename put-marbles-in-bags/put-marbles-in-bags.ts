function putMarbles(weights: number[], k: number): number {
    const pairWeights = [];
    for(let i = 0; i < weights.length - 1; ++i) {
        pairWeights.push(weights[i] + weights[i + 1])
    }
    pairWeights.sort((a,b)=>a-b);
    
    let answer = 0;
    for(let i = 0; i < k - 1; ++i) {
        answer += pairWeights[pairWeights.length - 1 - i] - pairWeights[i];
    }
    return answer;
};