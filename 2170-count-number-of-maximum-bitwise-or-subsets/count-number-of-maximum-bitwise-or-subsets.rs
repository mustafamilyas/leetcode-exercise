use std::collections::HashMap;

impl Solution {
    pub fn count_max_or_subsets(nums: Vec<i32>) -> i32 {
        let mut hashmap: HashMap<i32, i32> = HashMap::new();
        let mut max_value = 0;
        let mut cur_value = 0;
        hashmap.insert(0, 1);
        for n in nums.iter() {
            max_value |= n;
        }

        for n in nums.iter() {
            for i in (0..=cur_value).rev() {
                let prev = *hashmap.get(&i).unwrap_or(&0);
                *hashmap.entry(i | n).or_insert(0) += prev;
            }
            cur_value |= n;
        }
        *hashmap.get(&max_value).unwrap_or(&0)
    }
}

/*
3 = 1
2 = 1
1 = 1
5 = 1


*/