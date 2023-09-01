function maximalSquare(matrix: string[][]): number {
    const rowLength = matrix.length;
    const colLength = matrix[0].length;

    let prev = new Array(colLength).fill(0)
    let current = new Array(colLength).fill(0)
    let maximum = 0;

    for(let i = 0; i < rowLength; i++) {
        for(let k = 0; k < colLength; k++) {
            if(matrix[i][k] === '1') {
                const minPrev = Math.min(
                    current?.[k - 1] ?? 0,
                    prev?.[k - 1] ?? 0,
                    prev[k],
                )
                current[k] = 1 + minPrev;
                maximum = Math.max(current[k], maximum)
            } else {
                current[k] = 0;
            }
        }

        const temp = current;
        current = prev;
        prev = temp;
    }
    return maximum * maximum;
};