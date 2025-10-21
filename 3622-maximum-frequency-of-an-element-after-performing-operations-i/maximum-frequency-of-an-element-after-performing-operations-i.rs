impl Solution {
    pub fn max_frequency(mut nums: Vec<i32>, k: i32, num_operations: i32) -> i32 {
        nums.sort();
        let mut max = 0;
        let mut low = 0;
        let mut cur = 0;
        let mut cur_high = 0;
        let mut high = 0;
        // this is for the case of low - mid - high
        while cur_high < nums.len() {
            // expand cur_high
            while cur_high < nums.len() && nums[cur] == nums[cur_high] {
                cur_high += 1;               
            }
            // move high
            high = high.max(cur_high);
            while high < nums.len() && nums[high] - k <= nums[cur] {
                high += 1;
            }
            // move low
            while low < cur && nums[low] + k < nums[cur] {
                low += 1;
            }
            // get max
            let changed = num_operations.min((cur - low) as i32 + (high - cur_high) as i32);
            max = max.max(cur_high as i32 - cur as i32 + changed);
            // prep for next iteration
            cur = cur_high;
        }
        low = 0;
        high = 0;
        while high < nums.len() {
            while high < nums.len() && nums[low] + 2 * k >= nums[high] {
                high += 1;
            }
            let changed = num_operations.min((high - low) as i32);
            max = max.max(changed);
            while low < high && high < nums.len() && nums[low] + 2 * k < nums[high] {
                low += 1;
            }
        }
        max
    }
}