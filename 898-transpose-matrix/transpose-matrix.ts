function transpose(matrix: number[][]): number[][] {
    const tMatrix = [];

    matrix.forEach((row, ri)=>{
        row.forEach((col, ci)=>{
            if(!tMatrix[ci]) tMatrix[ci] = []
            tMatrix[ci].push(col)
        })
    }) 
    return tMatrix;
};