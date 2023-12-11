func findSpecialInteger(arr []int) int {
    var counter float64 = 1
    limit := float64(len(arr)) / float64(4)

    for i := 1; i < len(arr); i++ {
        if arr[i] == arr[i - 1] {
            counter += 1;
            if counter > limit {
                return arr[i]
            }
        } else {
            counter = 1
        }
    }

    return arr[len(arr) - 1]
}