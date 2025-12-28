function countNegatives(grid: number[][]): number {
    let sum = 0;
    for(const row of grid) {
        const idx = findNegative(row);
        sum += row.length - idx;
    }
    return sum;
};

function findNegative(row: number[]): number {
    let start = 0, end = row.length;
    while(start < end) {
        const mid = Math.trunc((start + end) / 2);
        const midValue = row[mid];
        if(midValue >= 0) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }
    return start;
}