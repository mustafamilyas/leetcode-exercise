impl Solution {
    pub fn new21_game(n: i32, k: i32, max_pts: i32) -> f64 {
        if k == 0 { return 1.0 }
        let mut dp = vec![0.0f64; (n + 1) as usize];
        dp[0] = 1.0;
        let mut window_value = 1.0;
        let mut res = 0.0;
        for i in 1..n + 1 {
            dp[i as usize] = window_value / max_pts as f64;
            if i < k {
                window_value += dp[i as usize];
            } else {
                res += dp[i as usize]
            }
            if i - max_pts >= 0 && i - max_pts < k {
                window_value -= dp[(i - max_pts) as usize];
            }
        }
        res
    }
}