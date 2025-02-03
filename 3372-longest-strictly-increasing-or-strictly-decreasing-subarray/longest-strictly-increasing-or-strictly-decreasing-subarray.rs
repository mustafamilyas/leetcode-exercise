impl Solution {
    pub fn longest_monotonic_subarray(nums: Vec<i32>) -> i32 {
        let mut max = 1;
        let mut counter = 1;
        let mut is_asc = true;
        for i in 1..nums.len() {
            if nums[i] == nums[i - 1] {
                max = std::cmp::max(max, counter);
                counter = 1;
            } else if (is_asc && nums[i] > nums[i - 1]) || (!is_asc && nums[i] < nums[i - 1]) {
                counter += 1;
            } else {
                max = std::cmp::max(max, counter);
                is_asc = !is_asc;
                counter = 2;
            }
        }
        std::cmp::max(max, counter)
    }
}