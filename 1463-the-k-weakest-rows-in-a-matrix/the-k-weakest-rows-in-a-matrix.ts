function kWeakestRows(mat: number[][], k: number): number[] {
    const rowLength = mat.length;
    const colLength = mat[0].length;
    const weakest = new Set<number>();
    for(let i = 0; i <= colLength; i++) {
        for(let j = 0; j < rowLength; j++) {
            if(!mat?.[j]?.[i] && !weakest.has(j)) {
                weakest.add(j)
            }
        }
    } 
    return Array.from(weakest).slice(0, k)
};