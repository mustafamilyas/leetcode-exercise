func kthDistinct(arr []string, k int) string {
    counter := make(map[string]int)
    counterOrder := []string{}
    for _, value := range arr {
        counter[value]++
        if counter[value] == 1 {
            counterOrder = append(counterOrder, value)
        }
    }
    kth := 1
    for _, key := range counterOrder {
        value, ok := counter[key]
        if ok && value == 1 {
            if kth == k {
                return key
            }
            kth++
        }
    }
    return "";
}