impl Solution {
    pub fn clear_digits(s: String) -> String {
        let mut d_counter = 0;
        let mut res = String::new();

        for c in s.chars().rev() {
            let charcode = c as u32;
            if charcode >= 48 && charcode <= 57 {
                d_counter += 1;
            } else if d_counter > 0 {
                d_counter -= 1;
            } else {
                res.insert(0, c);
            }
        }
        res
    }
}