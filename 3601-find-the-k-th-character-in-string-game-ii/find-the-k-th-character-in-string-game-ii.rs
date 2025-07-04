impl Solution {
    pub fn kth_character(k: i64, operations: Vec<i32>) -> char {
        let mut i = 0;
        let mut k = k;
        let mut max = 2i128.pow(operations.len() as u32 - 1);
        let mut max_i: usize = operations.len() - 1;
        while k > 1 {
            if k as i128 > max {
                if operations[max_i] == 1 {
                    i += 1;
                }
                k -= max as i64;
            }
            max >>= 1;
            max_i -= 1;
        }
        char::from_u32((i % 26) as u32 + 97).unwrap()
    }
}

