use std::collections::HashMap;

impl Solution {
    pub fn maximum_length(nums: Vec<i32>) -> i32 {
        let mut even_counter = if nums[0] % 2 == 0 { 1 } else { 0 };
        let mut odd_counter = if nums[0] % 2 == 0 { 0 } else { 1 };
        let mut diff_counter = 1;
        let mut prev = nums[0] % 2;
        for i in 1..nums.len() {
            let cur = nums[i] % 2;
            if cur == 0 {
                even_counter += 1;
            } else {
                odd_counter += 1;
            }
            if prev != cur {
                prev = cur;
                diff_counter += 1;
            }
        }
        even_counter.max(odd_counter).max(diff_counter)
    }
}
/*
0 0 0 0 0
1 0 1 0 1 1 0
*/