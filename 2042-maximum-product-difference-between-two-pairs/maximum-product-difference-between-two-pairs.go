func maxProductDifference(nums []int) int {
    min1 := 10000
    min2 := 10000
    max1 := 1
    max2 := 1

    for _, value := range nums {
        if (value > max1) {
            max2 = max1
            max1 = value
        } else if (value > max2) {
            max2 = value
        }

        if (value < min1) {
            min2 = min1
            min1 = value
        } else if (value < min2) {
            min2 = value
        }
    }

    return max1 * max2 - min1 * min2
}