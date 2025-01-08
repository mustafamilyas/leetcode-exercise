impl Solution {
    pub fn count_prefix_suffix_pairs(words: Vec<String>) -> i32 {
        let mut counter = 0;
        for i in (1..words.len()) {
            for k in (0..i) {
                if words[i].starts_with(&words[k]) && words[i].ends_with(&words[k]) {
                    counter+=1
                };
            };
        };
        counter
    }
}