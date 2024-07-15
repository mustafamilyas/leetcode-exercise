func largestSumAfterKNegations(nums []int, k int) int {
    sort.Ints(nums)
    sum := 0
    smallAbs := math.MaxInt
    for i := 0; i < len(nums); i++ {
        if k > 0 && nums[i] <= 0 {
            sum += (nums[i] * -1)
            k--
        } else {
            sum += nums[i]
        }
        valueAbs := int(math.Abs(float64(nums[i])))
        if valueAbs < smallAbs {
            smallAbs = valueAbs
        }
    }
    if k == 0 || smallAbs == 0 || k % 2 == 0{
        return sum
    }
    return sum + 2 * smallAbs * -1
}