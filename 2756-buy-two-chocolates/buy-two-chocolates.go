func buyChoco(prices []int, money int) int {
    min1, min2 := money, money
    for _, value := range prices {
        if value < min1 {
            min2, min1 = min1, value
        } else if value < min2 {
            min2 = value
        }
    }
    remainder := money - min1 - min2
    if remainder >= 0 {
        return remainder
    }
    return money
}