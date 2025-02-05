impl Solution {
    pub fn are_almost_equal(s1: String, s2: String) -> bool {
        if s1.len() != s2.len() {
            return false;
        }
        let mut diff: Vec<(char, char)> = s1.chars().zip(s2.chars()).filter_map(|(c1, c2)| if c1 != c2 { Some((c1, c2))} else { None }).collect();
        if diff.len() == 2 && diff[0].0 == diff[1].1 && diff[0].1 == diff[1].0 {
            return true;
        }
        diff.len() == 0
    }
}