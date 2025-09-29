impl Solution {
    pub fn largest_perimeter(mut nums: Vec<i32>) -> i32 {
        nums.sort();
        let mut max = 0;
        let n = nums.len();
        for i in 1..=n - 2 {
            max = max.max(
                if nums[n - i] < nums[n - i - 1] + nums[n - i - 2] {
                    nums[n - i] + nums[n - i - 1] + nums[n - i - 2]
                } else {
                    0
                }
            );
        }
        max
    }
}