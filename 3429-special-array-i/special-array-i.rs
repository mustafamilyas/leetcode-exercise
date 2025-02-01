impl Solution {
    pub fn is_array_special(nums: Vec<i32>) -> bool {
        for i in 0..(nums.len() - 1) {
            if (nums[i] ^ nums[i + 1]) & 1 == 0 {
                return false;
            }
        }
        true
    }
}