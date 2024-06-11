function edgeScore(edges: number[]): number {
    const scores = new Array(edges.length).fill(0)
    let maxIdx = 0;
    for(let i = 0; i < edges.length; i++) {
        scores[edges[i]] += i
        if((scores[edges[i]] > scores[maxIdx]) || (scores[edges[i]] === scores[maxIdx] && edges[i] < maxIdx)) maxIdx = edges[i]
    }
    return maxIdx
};