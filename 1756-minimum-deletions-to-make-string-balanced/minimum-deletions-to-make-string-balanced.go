func minimumDeletions(s string) int {
    deletion := 0;
    bCount := 0;
    for i := 0; i < len(s); i++ {
        if s[i] == 'b' {
            bCount++
        } else {
            deletion = min(deletion + 1, bCount)
        }
    }
    return deletion;
}