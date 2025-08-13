impl Solution {
    pub fn is_power_of_three(n: i32) -> bool {
        if n <= 0 { return false }
        let x = ((n + 1) as f64).log(3.0).trunc();
        n == ((3.0_f64).powf(x) as i32)
    }
}