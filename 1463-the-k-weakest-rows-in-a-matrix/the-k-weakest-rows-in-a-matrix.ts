function kWeakestRows(mat: number[][], k: number): number[] {
    const rowLength = mat.length;
    const colLength = mat[0].length;
    const weakest = new Set<number>();
    for(let i = 0; i <= colLength; i++) {
        for(let k = 0; k < rowLength; k++) {
            if(!mat?.[k]?.[i] && !weakest.has(k)) {
                weakest.add(k)
            }
        }
    } 
    return Array.from(weakest).slice(0, k)
};