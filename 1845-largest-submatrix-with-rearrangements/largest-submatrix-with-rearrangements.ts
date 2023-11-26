function largestSubmatrix(matrix: number[][]): number {
    const rowLength = matrix.length;
    const colLength = matrix[0].length;
    const prevRowCount = new Array(colLength).fill(0);
    let max = 0;

    for(const row of matrix) {
        let count1 = 0;
        let h1 = 0;
        let h2 = 0;
        for(let i = 0; i < colLength; i++) {
            if(row[i] === 1) {
                prevRowCount[i]++
                count1++
                if(prevRowCount[i] > h1) {
                    h2 = h1;
                    h1 = prevRowCount[i];
                } else if(prevRowCount[i] > h2) {
                    h2 = prevRowCount[i]
                }
            } else {
                prevRowCount[i] = 0;
            }
        }
        max = Math.max(max, count1);
        const copy = [...prevRowCount];
        copy.sort((a,b)=>b-a);
        for(let i = 0; i < copy.length; i++) {
            max = Math.max(max, (i + 1) * copy[i])
        }
    }
    return max;
};