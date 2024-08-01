func minimumDeletions(s string) int {
    deletion := 0;
    bCount := 0;
    for i := 0; i < len(s); i++ {
        if s[i] == 'b' {
            bCount++
        } else {
            deletion = int(math.Min(float64(deletion + 1), float64(bCount)))
        }
    }
    return deletion;
}