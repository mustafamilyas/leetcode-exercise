impl Solution {
    pub fn max_increasing_subarrays(nums: Vec<i32>) -> i32 {
        let mut count = 1;
        let mut prev = 0;
        let mut max = 0;
        for i in 1..=nums.len() {
            let cur = *nums.get(i).unwrap_or(&i32::MIN);
            if nums[i - 1] < cur {
                count += 1;
            } else {
                max = max.max(count / 2).max(count.min(prev));
                prev = count;
                count = 1;
            }
        }
        max
    }
}