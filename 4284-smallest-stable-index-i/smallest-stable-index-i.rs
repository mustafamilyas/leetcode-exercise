impl Solution {
    pub fn first_stable_index(nums: Vec<i32>, k: i32) -> i32 {
        let mut mins = vec![i32::MAX; nums.len()];
        let mut running_min = i32::MAX;
        let mut running_max = i32::MIN;
        for (i, item) in mins.iter_mut().enumerate().rev() {
            running_min = nums[i].min(running_min);
            *item = running_min;
        }
        for i in 0..nums.len() {
            running_max = nums[i].max(running_max);
            let value = running_max - mins.get(i).copied().unwrap_or(i32::MAX);
            if value <= k {
                return i.try_into().unwrap();
            }
        }
        -1
    }
}