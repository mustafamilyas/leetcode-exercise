impl Solution {
    pub fn minimize_sum(mut nums: Vec<i32>) -> i32 {
        let n: usize = nums.len();
        let mut min = vec![i32::MAX; 3];
        let mut max = vec![i32::MIN; 3];
        for x in nums {
            if x > max[0] {
                max[2] = max[1];
                max[1] = max[0];
                max[0] = x;
            } else if x > max[1] {
                max[2] = max[1];
                max[1] = x;
            } else if x > max[2] {
                max[2] = x;
            }

            if x < min[0] {
                min[2] = min[1];
                min[1] = min[0];
                min[0] = x;
            } else if x < min[1] {
                min[2] = min[1];
                min[1] = x;
            } else if x < min[2] {
                min[2] = x;
            }
        }
        (max[0] - min[2]).min(max[1] - min[1]).min(max[2] - min[0])
    }
}