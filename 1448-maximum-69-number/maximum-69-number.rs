impl Solution {
    pub fn maximum69_number (num: i32) -> i32 {
        let mut x = (num as f64).log10() as u32 + 1;
        let mut res = 0;
        let mut changed = false;
        while x > 0 {
            let mut y = (num / 10_i32.pow(x - 1) ) % 10;
            if y == 6 && !changed {
                y = 9;
                changed = true;
            }
            res += y * 10_i32.pow(x - 1);
            x -= 1;
        }
        res
    }
}