use std::collections::HashMap;

impl Solution {
    pub fn count_largest_group(n: i32) -> i32 {
        let mut max_key = 1;
        let mut count_map: HashMap<i32, i32> = HashMap::new();
        for i in 1..=n {
            let digit_count = Self::get_digit_count(i);
            if let Some(value) = count_map.get_mut(&digit_count) {
                *value += 1;
                max_key = std::cmp::max(max_key, *value);
            } else {
                count_map.insert(digit_count, 1);
            }
        }
        count_map.values().filter(|&&v| v == max_key).count() as i32
    }

    pub fn get_digit_count(n: i32) -> i32 {
        let mut count = 0;
        let mut cur = n;
        while cur > 0 {
            count += cur % 10;
            cur /= 10;
        }
        count
    }
}

