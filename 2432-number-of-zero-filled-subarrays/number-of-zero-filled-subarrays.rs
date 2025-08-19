impl Solution {
    pub fn zero_filled_subarray(nums: Vec<i32>) -> i64 {
        let mut zero_counter = 0;
        let mut result = 0;
        for n in nums.iter() {
            if *n == 0 {
                zero_counter += 1;
            } else {
                result += zero_counter * (zero_counter + 1) / 2;
                zero_counter = 0;
            }
        }
        result += zero_counter * (zero_counter + 1) / 2;
        result
    }
}