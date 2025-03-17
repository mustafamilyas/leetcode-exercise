use std::collections::HashSet;

impl Solution {
    pub fn divide_array(nums: Vec<i32>) -> bool {
        let mut count = HashSet::new();

        for i in 0..nums.len() {
            if count.contains(&nums[i]) {
                count.remove(&nums[i]);
            } else {
                count.insert(&nums[i]);
            }
        }

        count.len() == 0
    }
}