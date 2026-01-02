use std::collections::HashMap;

impl Solution {
    pub fn repeated_n_times(nums: Vec<i32>) -> i32 {
        let n = (nums.len() / 2) as i32;
        let mut map: HashMap<i32, i32> = HashMap::new();
        for i in nums.iter() {
            *map.entry(*i).or_insert(0i32) += 1;
        }
        for (key, value) in map.iter() {
            if *value == n {
                return *key;
            }
        }
        n
    }
}