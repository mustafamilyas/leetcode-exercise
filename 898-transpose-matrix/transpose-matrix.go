func transpose(matrix [][]int) [][]int {
    m := len(matrix)
    n := len(matrix[0])
    tMatrix := make([][]int, n)

    for i := range matrix {
        for j := range matrix[i] {
            if tMatrix[j] == nil {
                tMatrix[j] = make([]int, m)
            }
            tMatrix[j][i] = matrix[i][j]
        }
    }

    return tMatrix
}