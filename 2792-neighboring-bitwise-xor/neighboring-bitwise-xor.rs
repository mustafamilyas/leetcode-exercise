impl Solution {
    pub fn does_valid_array_exist(derived: Vec<i32>) -> bool {
        let mut sum = 0;
        for v in derived {
            sum += v;
        }
        sum % 2 == 0
    }
}