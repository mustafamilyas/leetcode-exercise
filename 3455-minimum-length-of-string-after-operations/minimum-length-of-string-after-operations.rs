impl Solution {
    pub fn minimum_length(s: String) -> i32 {
        let mut length = 0;
        let mut char_counter: [i32; 26] = [0; 26];

        for v in s.chars() {
            let index = v as usize - 97;
            char_counter[index] += 1;
        }

        for v in char_counter {
            if v < 1 {
                length += v;
            } else if v % 2 == 1 {
                length += 1;
            } else {
                length += 2;
            }
        }
        length
    }
}