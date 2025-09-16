use std::collections::{HashSet, HashMap};

impl Solution {
    pub fn most_common_word(paragraph: String, banned: Vec<String>) -> String {
        let banned_set: HashSet<String> = banned.into_iter().collect();
        let mut count: HashMap<String, i32> = HashMap::new();
        let mut current_word = String::new();
        for c in paragraph.chars() {
            if (c as i32 >= 'a' as i32 && c as i32 <= 'z' as i32) || (c as i32 >= 'A' as i32 && c as i32 <= 'Z' as i32) {
                current_word.push(c);
            } else {
                let l_cur_word = current_word.to_lowercase();
                if l_cur_word.len() > 0 && !banned_set.contains(&l_cur_word) {
                    *count.entry(l_cur_word).or_insert(0) += 1;
                }
                current_word.clear();
            }
        }
        let l_cur_word = current_word.to_lowercase();
        if l_cur_word.len() > 0 && !banned_set.contains(&l_cur_word) {
            *count.entry(l_cur_word).or_insert(0) += 1;
        }
        count.iter().max_by_key(|entry| entry.1).map(|entry| entry.0.to_string()).unwrap()
    }
}