impl Solution {
    pub fn maximum_count(nums: Vec<i32>) -> i32 {
        let mut neg = 0;
        let mut pos = 0;
        while neg < nums.len() && nums[neg] < 0 {
            neg += 1;
        }
        while pos < nums.len() && nums[nums.len() - pos - 1] > 0 {
            pos += 1;
        }
        std::cmp::max(neg as i32, pos as i32)
    }
}