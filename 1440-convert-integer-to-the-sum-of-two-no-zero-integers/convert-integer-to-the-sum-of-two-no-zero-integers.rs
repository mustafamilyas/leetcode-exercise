impl Solution {
    pub fn get_no_zero_integers(n: i32) -> Vec<i32> {
        for i in 1..=(n / 2) {
            if Self::is_non_zero(i) && Self::is_non_zero(n - i) {
                return vec![i, n - i]
            }
        }
        vec![]
    }

    pub fn is_non_zero(n: i32) -> bool {
        let mut i = n;
        while i > 9 {
            if i % 10 == 0 {
                return false
            }
            i /= 10;
        }
        true
    }
}