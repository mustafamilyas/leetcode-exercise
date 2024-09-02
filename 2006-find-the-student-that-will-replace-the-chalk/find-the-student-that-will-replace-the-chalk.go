func chalkReplacer(chalk []int, k int) int {
    cumulativeUsed := []int{}
    used := 0
    for i := 0; i < len(chalk); i++ {
        used += chalk[i];
        cumulativeUsed = append(cumulativeUsed, used)
    }
    modUsed := k % used;
    left := 0
    right := len(cumulativeUsed) - 1;
    for left < right {
        mid := (left + right) / 2
        if cumulativeUsed[mid] <= modUsed {
            left = mid + 1
        } else {
            right = mid
        }
    }
    return left;
}