use std::collections::HashSet;
use std::iter::FromIterator;

impl Solution {
    pub fn contains_duplicate(nums: Vec<i32>) -> bool {
        let nums_len = nums.len();
        let set: HashSet<i32> = HashSet::from_iter(nums);
        nums_len != set.len()
    }
}


/*
There are two approach of solving this problem
Brute-force: check each item if there is duplicate value inside the array. It would be O(n)
Better approach: one pass with set, or just use method to transform array into set, then we can just compare the size

On rust we can use HashSet::from_iter or .collect. Both of them require us to specify the type upfront (not inferred)
*/