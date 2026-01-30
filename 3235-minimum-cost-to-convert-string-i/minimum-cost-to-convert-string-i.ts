function minimumCost(source: string, target: string, original: string[], changed: string[], cost: number[]): number {
    const n = 26;
    const vertices = Array.from({length: n}, () => Array(n).fill(Infinity));
    // set cost for transforming to itself to 0
    for(let i = 0; i < n; i++) {
        vertices[i][i] = 0
    }
    for(let i = 0; i < original.length; i++) {
        const from = original[i].charCodeAt(0) - 97;
        const to = changed[i].charCodeAt(0) - 97;
        vertices[from][to] = Math.min(vertices[from][to], cost[i]); 
    }
    for(let k = 0; k < n; k++) {
        for(let i = 0; i < n; i++) {
            for(let j = 0; j < n; j++) {
                vertices[i][j] = Math.min(vertices[i][j], vertices[i][k] + vertices[k][j])
            }
        }    
    }
    let totalCost = 0;
    for(let i = 0; i < source.length; i++) {
        const from = source.charCodeAt(i) - 97;
        const to = target.charCodeAt(i) - 97;
        const curCost = vertices[from][to];
        if(!Number.isFinite(curCost)) return -1;
        totalCost += curCost;
    }
    return totalCost;

};