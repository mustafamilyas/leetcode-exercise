impl Solution {
    pub fn find_lhs(nums: Vec<i32>) -> i32 {
        let mut hashmap = std::collections::HashMap::new();
        let mut res = 0;
        for v in nums.iter() {
            *hashmap.entry(v).or_insert(0) += 1;
        }
        for (key, value) in &hashmap {
            if let Some(prev_value) = hashmap.get(&(*key - 1)) {
                res = std::cmp::max(res, *value + prev_value)
            }
        }
        res
    }
}