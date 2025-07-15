impl Solution {
    pub fn is_valid(word: String) -> bool {
        if word.len() < 3 {
            return false;
        } 
        let mut vowel = 0;
        let mut conso = 0;
        for v in word.chars() {
            if !v.is_alphabetic() && !v.is_ascii_digit() {
                return false;
            }
            if "aiueoAIUEO".contains(v) {
                vowel += 1;
            } else if !v.is_ascii_digit() {
                conso += 1;
            }
        }
        vowel >= 1 && conso >= 1
    }
}