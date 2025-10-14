impl Solution {
    pub fn has_increasing_subarrays(nums: Vec<i32>, k: i32) -> bool {
        let mut inc_count = 1;
        let mut inc_vec = vec![];
        for i in 1..=nums.len() {
            if i < nums.len() && nums[i] > nums[i - 1] {
                inc_count += 1;
            } else {
                inc_vec.push(inc_count);
                inc_count = 1;
            }
        }
        for i in 0..inc_vec.len() {
            let next = *inc_vec.get(i + 1).unwrap_or(&0);
            if inc_vec[i] >= 2 * k || (inc_vec[i] >= k && next >= k) {
                return true
            }
        }
        false
    }
}