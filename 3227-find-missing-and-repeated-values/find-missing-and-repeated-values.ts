function findMissingAndRepeatedValues(grid: number[][]): number[] {
    let n = grid.length * grid.length, seen = new Set(), duplicate = -1, sum = 0;
    for(const row of grid) {
        for(const col of row) {
            sum += col
            if(seen.has(col)) {
                sum -= col
                duplicate = col
            } else seen.add(col)
        }
    }
    return [duplicate, n * (n + 1) / 2 - sum]
};