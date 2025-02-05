impl Solution {
    pub fn are_almost_equal(s1: String, s2: String) -> bool {
        if s1.len() != s2.len() {
            return false;
        }
        let mut diff: Vec<usize> = vec![];
        for i in 0..s1.len() {
            let idx = i as usize;
            if s1.chars().nth(idx) != s2.chars().nth(idx) {
                diff.push(idx);
            }
            if diff.len() > 2 {
                return false;
            }
        }
        if diff.len() == 1 {
            return false;
        }
        if diff.len() == 2 {
            let x = diff[0];
            let y = diff[1];
            if s1.chars().nth(x) != s2.chars().nth(y) || s1.chars().nth(y) != s2.chars().nth(x) {
                return false;
            }
        }
        true
    }
}