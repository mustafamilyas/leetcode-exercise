impl Solution {
    pub fn string_matching(words: Vec<String>) -> Vec<String> {
        let mut vec: Vec<String> = Vec::new();
        for i in (0..words.len()) {
            for k in (0..words.len()) {
                if words[k].contains(&words[i]) && i != k {
                    vec.push(words[i].clone());
                    break;
                };
            };
        };
        vec
    }
}