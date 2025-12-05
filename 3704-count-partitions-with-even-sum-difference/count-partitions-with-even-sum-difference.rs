impl Solution {
    pub fn count_partitions(nums: Vec<i32>) -> i32 {
        let mut partition = 0;
        let mut right: i32 = nums.clone().into_iter().reduce(|a, b| a + b).unwrap_or(0);
        let mut left = 0i32;
        for i in 0..(nums.len() - 1) {
            let cur = nums.get(i).unwrap_or(&0);
            left = left + cur;
            right = right - cur;
            if (right - left) % 2 == 0 {
                partition += 1;
            } 
        }
        partition
    }
}