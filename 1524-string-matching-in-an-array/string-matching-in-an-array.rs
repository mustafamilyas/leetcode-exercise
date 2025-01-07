impl Solution {
    pub fn string_matching(words: Vec<String>) -> Vec<String> {
        let mut vec: Vec<String> = Vec::new();
        let mut sorted_words: Vec<String> = Vec::new();
        sorted_words = words.clone();
        sorted_words.sort_by(|a, b| b.len().cmp(&a.len()));
        for i in (1..sorted_words.len()) {
            for k in (0..i) {
                if sorted_words[k].contains(&sorted_words[i]) {
                    vec.push(sorted_words[i].clone());
                    break;
                };
            };
        };
        vec
    }
}