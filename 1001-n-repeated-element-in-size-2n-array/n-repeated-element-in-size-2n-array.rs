use std::collections::HashSet;

impl Solution {
    pub fn repeated_n_times(nums: Vec<i32>) -> i32 {
        let mut a : HashSet<i32> = HashSet::new();
        for n in nums{
            // as the other value is unique, no duplicate
            if a.get(&n).is_some(){
                return n;
            }
            a.insert(n);
        }
        -1
    }
}