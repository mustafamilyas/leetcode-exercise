impl Solution {
    pub fn is_power_of_two(n: i32) -> bool {
        if n <= 0 { return false }
        let pow = n.ilog2();
        let a = (2i32).pow(pow);
        a & n == n
    }
}