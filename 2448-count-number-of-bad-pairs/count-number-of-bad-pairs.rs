use std::collections::HashMap;

impl Solution {
    pub fn count_bad_pairs(nums: Vec<i32>) -> i64 {
        let mut counter_map: HashMap<i64, i64> = HashMap::new();
        let mut bad_pairs: i64 = 0;

        for (i, value) in nums.iter().enumerate() {
            let key = *value as i64 - i as i64;
            let key_count = counter_map.get(&key).unwrap_or(&0);
            bad_pairs += i as i64 - key_count;
            counter_map.entry(key).and_modify(|counter| *counter += 1).or_insert(1);
        }
        bad_pairs
    }
}