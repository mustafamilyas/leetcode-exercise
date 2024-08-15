func lemonadeChange(bills []int) bool {
    counter := [2]int{}

    for i := 0; i < len(bills); i++ {
        if bills[i] == 5 {
            counter[0]++
        } else if bills[i] == 10 {
            if counter[0] == 0 {
                return false
            }
            counter[0]--
            counter[1]++
        } else {
            if counter[1] > 0 && counter[0] > 0 {
                counter[1]--
                counter[0]--
            } else if counter[0] >= 3 {
                counter[0] -= 3
            } else {
                return false
            }
        }
    }
    return true;
}