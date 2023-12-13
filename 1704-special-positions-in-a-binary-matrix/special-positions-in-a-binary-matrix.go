func numSpecial(mat [][]int) int {
    rowCount := make([]int, len(mat))
    colCount := make([]int, len(mat[0]))
    special := 0;

    for row, rowValue := range mat {
        for col, colValue := range rowValue {
            if colValue == 1 {
                rowCount[row]++
                colCount[col]++
            }
        }
    }

    for row, rowValue := range mat {
        for col, colValue := range rowValue {
            if colValue == 1 && rowCount[row] == 1 && colCount[col] == 1 {
                special++
            }
        }
    }

    return special
}