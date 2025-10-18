use std::collections::HashSet;

impl Solution {
    pub fn max_distinct_elements(mut nums: Vec<i32>, k: i32) -> i32 {
        let mut unique = HashSet::new();
        nums.sort();
        let mut lowest_i = nums[0] - k;

        for n in nums.iter() {
            let max = n + k;
            lowest_i = lowest_i.max(n - k);
            while lowest_i <= max && !unique.insert(lowest_i) {
                lowest_i += 1;
            }
        }
        unique.len() as i32
    }
}