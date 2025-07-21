impl Solution {
    pub fn make_fancy_string(s: String) -> String {
        let mut res = String::new();
        let mut prev_char: Option<char> = None;
        let mut count = 0;
        for c in s.chars() {
            if Some(c) == prev_char {
                count += 1;
            } else {
                count = 1;
            }
            if count < 3 {
                res.push(c);
            }
            prev_char = Some(c);
        }
        res
    }
}