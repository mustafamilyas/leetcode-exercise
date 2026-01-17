function largestSquareArea(bottomLeft: number[][], topRight: number[][]): number {
    const n = bottomLeft.length;
    let max = 0;
    for(let i = 0; i < n - 1; i++) {
        for(let k = i + 1; k < n; k++) {
            const intersectionArea = calculateIntersectSquare(i, k);
            max = Math.max(intersectionArea, max);
        }
    }
    return max;

    function calculateIntersectSquare(i, k) {
        const [txi, tyi] = topRight[i];
        const [bxi, byi] = bottomLeft[i];
        const [txk, tyk] = topRight[k];
        const [bxk, byk] = bottomLeft[k];

        if(txk <= bxi || txi <= bxk || tyk <= byi || tyi <= byk) return 0;

        const yMax = Math.min(topRight[i][1], topRight[k][1]);
        const xMax = Math.min(topRight[i][0], topRight[k][0]);
        const yMin = Math.max(bottomLeft[i][1], bottomLeft[k][1]);
        const xMin = Math.max(bottomLeft[i][0], bottomLeft[k][0]);
        const side = Math.min(yMax - yMin, xMax - xMin);
        return side * side;
    }
};