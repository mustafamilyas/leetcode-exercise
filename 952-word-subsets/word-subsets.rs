impl Solution {
    pub fn word_subsets(words1: Vec<String>, words2: Vec<String>) -> Vec<String> {
        let mut counter: [i32; 26] = [0; 26];
        let mut result: Vec<String> = vec![];
        for word in words2.iter() {
            let local_counter = Self::get_char_counter(word.clone());
            for (i, v) in local_counter.iter().enumerate() {
                counter[i] = std::cmp::max(counter[i], *v)
            }
        }
        for word in words1.iter() {
            let char_counter = Self::get_char_counter(word.clone());
            let mut i = 0;
            while i < 26 {
                if counter[i] > char_counter[i] {
                    break;
                }
                i += 1;
            }
            if i == 26 {
                result.push(word.clone());
            }
        }
        result
    }

    pub fn get_char_counter(word: String) -> [i32; 26] {
        let mut counter: [i32; 26] = [0; 26];
        for v in word.chars() {
            let index = v as usize - 97;
            counter[index] += 1;
        }
        counter
    }
}