use std::collections::HashMap;

impl Solution {
    pub fn max_frequency_elements(nums: Vec<i32>) -> i32 {
        let mut count_map: HashMap<i32, i32> = HashMap::new();
        let mut max_value = 0;
        let mut max_count = 0;
        for v in nums.iter() {
            *count_map.entry(*v).or_insert(0) += 1;
        }
        for v in count_map.values() {
            if *v > max_value {
                max_value = *v;
                max_count = *v;
            } else if *v == max_value {
                max_count += *v;
            }
        }
        max_count
    }
}