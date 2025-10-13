use std::collections::HashSet;

impl Solution {
    pub fn remove_anagrams(words: Vec<String>) -> Vec<String> {
        let mut prev = vec![];
        let mut unique = vec![];
        for w in words.iter() {
            let hash = Self::hash(w);
            if hash == prev { continue; }
            unique.push(w.into());
            prev = hash;
        }
        unique
    }

    pub fn hash(words: &str) -> Vec<usize> {
        let mut counter = vec![0; 26];
        for c in words.chars() {
            let idx = c as usize - b'a' as usize;
            counter[idx] += 1;
        }
        counter
    }
}