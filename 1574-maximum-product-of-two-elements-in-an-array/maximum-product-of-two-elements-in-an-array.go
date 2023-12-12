func maxProduct(nums []int) int {
    max := 1
    max2 := 1;

    for _, v := range nums {
        if v >= max {
            max2 = max;
            max = v;
        } else if v >= max2 {
            max2 = v;
        }
    }
    
    return (max - 1) * (max2 - 1);
}