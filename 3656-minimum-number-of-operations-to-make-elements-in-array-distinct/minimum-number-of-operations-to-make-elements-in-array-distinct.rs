use std::collections::HashSet;

impl Solution {
    pub fn minimum_operations(nums: Vec<i32>) -> i32 {
        let mut set: HashSet<i32> = HashSet::new();
        let mut check: usize = nums.len() % 3;
        let mut i: i32 = nums.len() as i32 - 1;
        let mut res = 0i32;
        if check == 0 {
            check = 3;
        }
        while i >= 0 {
            while check > 0 && i >= 0 {
                if set.contains(&nums[i as usize]) {
                    break;
                }
                set.insert(nums[i as usize]);
                i -= 1;
                check -= 1;
            }
            if check > 0 {
                break;
            }
            res += 1;
            check = 3;
        }
        if nums.len() % 3 > 0 {
            nums.len() as i32 / 3 - res + 1
        } else {
            nums.len() as i32 / 3 - res
        }
    }
}