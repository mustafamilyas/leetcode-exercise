impl Solution {
    pub fn find_numbers(nums: Vec<i32>) -> i32 {
        let mut result = 0;
        for v in nums.iter() {
            let digit = 1 + (*v as f64).log10().floor() as i32;
            if digit % 2 == 0 {
                result += 1;
            }
        }
        result
    }
}