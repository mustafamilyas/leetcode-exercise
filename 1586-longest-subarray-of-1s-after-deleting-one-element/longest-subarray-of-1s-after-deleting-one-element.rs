impl Solution {
    pub fn longest_subarray(nums: Vec<i32>) -> i32 {
        let mut a = 0;
        let mut b = 0;
        let mut max = 0;
        for n in nums.iter() {
            if *n == 1 {
                b += 1;
            } else {
                max = max.max(a + b);
                a = b;
                b = 0;
            }
        }
        if b == nums.len() as i32 { b - 1 } else { max.max(a + b) }
    }
}