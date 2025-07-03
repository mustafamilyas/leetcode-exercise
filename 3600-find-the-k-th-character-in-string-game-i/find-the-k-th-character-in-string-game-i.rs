impl Solution {
    pub fn kth_character(k: i32) -> char {
        let mut i = 0;
        let mut next_index = k;
        while next_index > 1 {
            next_index -= 2i32.pow(((next_index as f64).log2() - 1.0).ceil() as u32);
            i += 1;
        }
        char::from_u32((i % 26) as u32 + 97).unwrap()
    }
}

/*
a
ab
abbc
abbcbccd
abbcbccdbccdcdde
13
5
1
*/