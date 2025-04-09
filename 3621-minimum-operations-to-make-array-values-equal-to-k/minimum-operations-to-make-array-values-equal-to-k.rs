use std::collections::HashSet;

impl Solution {
    pub fn min_operations(nums: Vec<i32>, k: i32) -> i32 {
        let mut set: HashSet<i32> = HashSet::new();
        for n in nums.iter() {
            if *n > k {
                set.insert(*n);
            } else if *n < k {
                return -1;
            }
        }
        set.len() as i32
    }
}