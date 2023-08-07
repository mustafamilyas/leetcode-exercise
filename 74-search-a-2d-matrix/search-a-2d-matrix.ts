function searchMatrix(matrix: number[][], target: number): boolean {
    const m = matrix.length;
    const n = matrix[0].length;
    let start = 0;
    let end = m * n - 1;

    while(start <= end) {
        const mid = start + Math.ceil((end - start) / 2);
        const row = Math.floor(mid / n);
        const col = mid % n;
        const midValue = matrix?.[row]?.[col]
        if(midValue === target) return true;
        if(midValue > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return false;
};