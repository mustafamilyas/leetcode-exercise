use std::collections::HashMap;

impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut map = HashMap::new();
        let mut res: Vec<i32> = Vec::new();
        for (index, value) in nums.iter().enumerate() {
            let counterpart = target - value;
            if let Some(counterpart_index) = map.get(&counterpart) {
                res.push(*counterpart_index as i32);
                res.push(index as i32);
                break;
            };
            map.insert(value, index as i32);
        };
        res
    }
}