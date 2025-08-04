use std::collections::HashMap;

impl Solution {
    pub fn total_fruit(fruits: Vec<i32>) -> i32 {
        let mut max_total = 0;
        let mut left = 0;
        let mut counter: HashMap<i32, i32> = HashMap::new();
        for (right, &value) in fruits.iter().enumerate() {
            *counter.entry(value).or_insert(0) += 1;
            if counter.len() > 2 {
                max_total = max_total.max(right - left);
                while counter.len() > 2 && left < right {
                    let left_value = fruits[left];
                    if let Some(count) = counter.get_mut(&left_value) {
                        *count -= 1;
                        if *count == 0 {
                            counter.remove(&left_value);
                        }
                    }
                    left += 1;
                }
            }
        }
        max_total.max(fruits.len() - left) as i32
    }
}