impl Solution {
    pub fn check(nums: Vec<i32>) -> bool {
        let mut is_down = false;
        for i in 0..nums.len() {
            let prev = if i == 0 { nums.len() - 1 } else { i - 1 };
            if nums[prev] > nums[i] {
                if is_down {
                    return false;
                } 
                is_down = true;
            }
        }
        true
    }
}