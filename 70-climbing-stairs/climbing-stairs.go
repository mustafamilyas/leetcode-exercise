func climbStairs(n int) int {
    prev, cur := 1, 1;
    for i := 1; i < n; i++ {
        next := prev + cur;
        prev = cur;
        cur = next;
    }
    return cur;
}