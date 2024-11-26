function findChampion(n: number, edges: number[][]): number {
    const count = new Array(n).fill(0);
    for(const [_, node] of edges) {
        count[node]++
    }
    let strongest = -1;
    for(let i = 0; i < n; i++) {
        if(count[i] === 0) {
            if(strongest !== -1) return -1
            strongest = i 
        }
    }
    return strongest;
};