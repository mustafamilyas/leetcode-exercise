impl Solution {
    pub fn count_partitions(nums: Vec<i32>) -> i32 {
        let mut partition = 0;
        let mut right: i32 = nums.iter().sum();
        let mut left = 0i32;
        for cur in nums.iter().take(nums.len() - 1) {
            left = left + cur;
            right = right - cur;
            if (right - left) % 2 == 0 {
                partition += 1;
            } 
        }
        partition
    }
}