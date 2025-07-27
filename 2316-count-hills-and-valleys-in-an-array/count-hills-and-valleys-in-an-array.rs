impl Solution {
    pub fn count_hill_valley(nums: Vec<i32>) -> i32 {
        let mut prev = 0;
        let mut cur = 1;
        let mut next = 2;
        let mut res = 0;
        while next < nums.len() {
            while next < nums.len() && nums[cur] == nums[next] {
                cur += 1;
                next += 1;
            }
            if let Some(&next_v) = nums.get(next) {
                if  (nums[prev] < nums[cur] && nums[cur] > next_v) ||
                    (nums[prev] > nums[cur] && nums[cur] < next_v)
                {
                    res += 1;
                }
                prev = cur;
                cur = next;
                next += 1;
            }
        }
        res
    }
}