impl Solution {
    pub fn longest_subarray(nums: Vec<i32>) -> i32 {
        let mut highest = nums[0];
        let mut max = 1;
        let mut count = 1;
        for i in 1..nums.len() {
            if highest == nums[i] {
                count += 1;
                max = max.max(count);
            } else {
                if nums[i] > highest {
                    highest = nums[i];
                    count = 1;
                    max = 1;
                } else {
                    count = 0;
                }
            }
        }
        max
    }
}