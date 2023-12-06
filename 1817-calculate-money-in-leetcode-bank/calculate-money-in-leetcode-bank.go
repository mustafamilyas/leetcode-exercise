func totalMoney(n int) int {
    iteration := n / 7
    money := 0

    for i := 0; i <= iteration; i++ {
        days := 7
        if i == iteration {
            days = n % 7
        }
        money = money + days * i + (days * (days + 1) / 2)
    }
    return money
}