impl Solution {
    pub fn flower_game(n: i32, m: i32) -> i64 {
        let n = n as i64;
        let m = m as i64;
        // The reason we don't pull out the divided by 2 is to trunc 
        // the value of each component before getting the combination
        ((n + 1) / 2) * (m / 2) + (n / 2) * ((m + 1) / 2)
    }
}