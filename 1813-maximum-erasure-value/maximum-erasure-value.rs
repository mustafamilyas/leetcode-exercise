use std::collections::HashSet;

impl Solution {
    pub fn maximum_unique_subarray(nums: Vec<i32>) -> i32 {
        let mut set: HashSet<i32> = HashSet::new();
        let mut i = 0;
        let mut r_count = 0;
        let mut m_count = 0;
        for v in nums.iter() {
            while set.contains(v) {
                set.remove(&nums[i]);
                r_count -= nums[i];
                i += 1;
            }
            set.insert(*v);
            r_count += *v;
            m_count = std::cmp::max(r_count, m_count);
        } 
        m_count
    }
}