impl Solution {
    pub fn max_ascending_sum(nums: Vec<i32>) -> i32 {
        if nums.len() == 0 {
            return 0;
        }

        let mut cur = nums[0];
        let mut max = 0;

        for i in 1..nums.len() {
            if nums[i - 1] < nums[i] {
                cur += nums[i];
            } else {
                max = std::cmp::max(max, cur);
                cur = nums[i];
            }
        }
        std::cmp::max(max, cur)
    }
}