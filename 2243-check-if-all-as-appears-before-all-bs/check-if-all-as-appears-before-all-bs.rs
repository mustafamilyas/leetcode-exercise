impl Solution {
    pub fn check_string(s: String) -> bool {
        let mut bs = false;
        for v in s.chars() {
            if v == 'b' {
                bs = true;
            } else if bs {
                return false;
            }
        }
        true
    }
}