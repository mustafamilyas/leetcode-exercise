impl Solution {
    pub fn count_prefix_suffix_pairs(words: Vec<String>) -> i32 {
        let mut counter = 0;
        for i in (1..words.len()) {
            for k in (0..i) {
                if Self::is_prefix_suffix(words[k].clone(), words[i].clone()) {
                    counter+=1
                };
            };
        };
        counter
    }

    pub fn is_prefix_suffix(w1: String, w2: String) -> bool {
        w2.starts_with(&w1) && w2.ends_with(&w1)
    }
}