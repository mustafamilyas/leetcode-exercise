impl Solution {
    pub fn maximum_triplet_value(nums: Vec<i32>) -> i64 {
        let mut ks = nums.clone();
        let mut is = nums.clone();
        let mut max = 0;
        for (i, v) in nums.iter().enumerate().rev() {
            if i < nums.len() - 1 {
                ks[i] = std::cmp::max(*v, ks[i + 1]);
            }
        }
        for (i, v) in nums.iter().enumerate() {
            if i > 0 {
                is[i] = std::cmp::max(*v, is[i - 1]);
            }
        }
        for (i, v) in nums.iter().enumerate() {
            if i > 0 && i < nums.len() - 1 {
                max = std::cmp::max(max, (is[i - 1] as i64 - *v as i64) * ks[i + 1] as i64);
            }
        }
        max
    }
}