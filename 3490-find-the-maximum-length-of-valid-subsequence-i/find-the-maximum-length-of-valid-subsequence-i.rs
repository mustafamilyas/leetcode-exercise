use std::collections::HashMap;

impl Solution {
    pub fn maximum_length(nums: Vec<i32>) -> i32 {
        let mut counter: [i32; 3] = [if nums[0] % 2 == 0 { 1 } else { 0 }, if nums[0] % 2 == 0 { 0 } else { 1 }, 1];
        let mut prev = nums[0] % 2;
        for i in 1..nums.len() {
            let cur = nums[i] % 2;
            if cur == 0 {
                counter[0] += 1;
            } else {
                counter[1] += 1;
            }
            if prev != cur {
                prev = cur;
                counter[2] += 1;
            }
        }
        *counter.iter().max().unwrap_or(&0)
    }
}
/*
0 0 0 0 0
1 0 1 0 1 1 0
*/