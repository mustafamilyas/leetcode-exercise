impl Solution {
    pub fn sort_vowels(s: String) -> String {
        let mut vowels_counter = vec![0; 10];
        let mut res = String::new();
        let mut vowels_idx = 0;
        for c in s.chars() {
            match c {
                'A' => vowels_counter[0] += 1,
                'E' => vowels_counter[1] += 1,
                'I' => vowels_counter[2] += 1,
                'O' => vowels_counter[3] += 1,
                'U' => vowels_counter[4] += 1,
                'a' => vowels_counter[5] += 1,
                'e' => vowels_counter[6] += 1,
                'i' => vowels_counter[7] += 1,
                'o' => vowels_counter[8] += 1,
                'u' => vowels_counter[9] += 1,
                _ => {}
            }
        }
        for c in s.chars() {
            while vowels_idx < vowels_counter.len() && vowels_counter[vowels_idx] == 0 {
                vowels_idx += 1;
            }
            match c {
                'A'|'E'|'I'|'O'|'U'|'a'|'e'|'i'|'o'|'u' => {
                    res.push(Self::get_char(vowels_idx));
                    vowels_counter[vowels_idx] -= 1;
                }
                _ => {
                    res.push(c);
                }
            }
        }
        res
    }

    pub fn get_char(i: usize) -> char {
        match i {
                0 => 'A',
                1 => 'E',
                2 => 'I',
                3 => 'O',
                4 => 'U',
                5 => 'a',
                6 => 'e',
                7 => 'i',
                8 => 'o',
                9 => 'u',
                _ => panic!()
        }
    }
}