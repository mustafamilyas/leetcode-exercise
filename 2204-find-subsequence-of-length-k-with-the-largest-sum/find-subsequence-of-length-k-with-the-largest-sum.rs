use std::collections::HashMap;

impl Solution {
    pub fn max_subsequence(nums: Vec<i32>, k: i32) -> Vec<i32> {
        let mut hashmap = HashMap::new(); 
        let mut res = vec![];
        let mut sorted_nums = nums.clone();
        sorted_nums.sort();
        for i in nums.len() - k as usize..nums.len() {
            *hashmap.entry(sorted_nums[i]).or_insert(0) += 1;
        }
        for v in nums {
            if let Some(count) = hashmap.get_mut(&v) {
                if *count > 0 {
                    res.push(v);
                    *count -= 1;
                }
            }
        }
        res
    }
}