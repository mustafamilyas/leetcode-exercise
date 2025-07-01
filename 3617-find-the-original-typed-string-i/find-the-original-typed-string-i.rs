impl Solution {
    pub fn possible_string_count(word: String) -> i32 {
        let mut count = 1;
        let mut prev = '\0'; 
        for v in word.chars() {
            if prev == v {
                count += 1;
            }
            prev = v;
        }
        count
    }
}