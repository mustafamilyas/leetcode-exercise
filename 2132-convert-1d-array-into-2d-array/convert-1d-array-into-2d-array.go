func construct2DArray(original []int, m int, n int) [][]int {
    if len(original) != m * n {
        return [][]int{};
    }
    result := make([][]int, m);
    originalIdx := 0
    for i := 0; i < m; i++ {
        result[i] = make([]int, n);
        for k := 0; k < n; k++ {
            result[i][k] = original[originalIdx]
            originalIdx++
        }
    }
    return result;
}