impl Solution {
    pub fn sum_zero(n: i32) -> Vec<i32> {
        let is_even = n % 2 == 0;
        let mut res = vec![];
        let start = (n / 2) * -1;
        for v in start..=n/2 {
            if is_even && v == 0 {
                continue;
            } 
            res.push(v)
        }
        res
    }
}