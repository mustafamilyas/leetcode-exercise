func onesMinusZeros(grid [][]int) [][]int {
    m := len(grid);
    n := len(grid[0]);
    sumRows := make([]int, m);
    sumCols := make([]int, n);

    for row, rowValue := range grid {
        for col, colValue := range rowValue {
            sumRows[row]+= 2 * colValue
            sumCols[col]+= 2 * colValue
            
        }
    }

    result := make([][]int, m);
    
    for i := 0; i < m; i++ {
        diffs := make([]int, n)
        for k := 0; k < n; k++ {
            diffs[k] = sumRows[i] + sumCols[k] - m - n
        }
        result[i] = diffs
    }

    return result;
}