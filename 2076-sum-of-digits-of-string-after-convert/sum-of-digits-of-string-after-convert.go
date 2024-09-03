func getLucky(s string, k int) int {
    converted := ""
    for i := 0; i < len(s); i++ {
        charcode := int(s[i]) - 96;
        converted = converted + strconv.Itoa(charcode)
    }
    next := 0;
    for k > 0 {
        next = 0
        for i := 0; i < len(converted); i++ {
            next += (int(converted[i]) - '0')
        }
        converted = strconv.Itoa(next)
        k--
    }
    return next;
}