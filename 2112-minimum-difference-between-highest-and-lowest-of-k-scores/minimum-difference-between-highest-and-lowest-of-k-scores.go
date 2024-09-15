func minimumDifference(nums []int, k int) int {
    if len(nums) < k || len(nums) == 1 {
        return 0
    }
    sort.Ints(nums);
    min := float64(100000)
    gap := k - 1;
    for i := len(nums) - 1; i >= gap; i-- {
        min = math.Min(float64(min), float64(nums[i] - nums[i - gap]))
    } 
    return int(min);
}