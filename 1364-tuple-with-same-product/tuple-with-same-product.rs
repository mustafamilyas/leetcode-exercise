use std::collections::HashMap;

impl Solution {
    pub fn tuple_same_product(nums: Vec<i32>) -> i32 {
        let mut mul_counter_map = HashMap::new();
        let mut tuple = 0;
        for i in 0..nums.len() - 1 {
            for j in (i + 1)..nums.len() {
                mul_counter_map.entry(nums[i] * nums[j]).and_modify(|counter| *counter += 1).or_insert(1);
            }
        }
        for (_, counter) in &mul_counter_map {
            tuple += 8 * (counter - 1) * counter / 2
        }
        tuple
    }
}
// 1 2 3 4 5 6 12
// 2   = 1
// 3   = 1
// 4   = 1
// 5   = 1
// 6   = 1 1 = 2 * 2 * 2 = 8
// 8   = 1
// 10  = 1
// 12  = 1 1 1 = 2 * 3 * 2 = 12
// 15  = 1
// 18  = 1
// 20  = 1
// 24  = 1 1 = 8
// 30  = 1
// 36  = 1
// 48  = 1
// 60  = 1
// 72  = 1