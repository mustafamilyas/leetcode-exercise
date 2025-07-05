use std::collections::HashMap;

impl Solution {
    pub fn find_lucky(arr: Vec<i32>) -> i32 {
        let mut counter: HashMap<i32, i32> = HashMap::new();
        let mut res = -1;
        for v in arr.iter() {
            *counter.entry(*v).or_insert(0) += 1;
        }

        for (&key, &v) in counter.iter() {
            if key == v {
                res = std::cmp::max(res, key);
            } 
        }
        res
    }
}