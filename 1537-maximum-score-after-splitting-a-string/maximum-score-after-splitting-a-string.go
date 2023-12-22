func maxScore(s string) int {
    left, right, maxScore := 0, 0, 0

    for _, val := range s {
        if val == 49 {
            right++
        }
    }
    for i := 0; i < len(s) - 1; i++ {
        if s[i] == 48 {
            left++
        } else {
            right--
        }
        sum := left + right

        if sum > maxScore {
            maxScore = sum
        }
    }
    return maxScore;
}