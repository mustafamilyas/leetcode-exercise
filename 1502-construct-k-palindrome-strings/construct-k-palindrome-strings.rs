impl Solution {
    pub fn can_construct(s: String, k: i32) -> bool {
        let mut counter: [i32; 26] = [0; 26];
        let mut odd_counter = 0;
        for c in s.chars() {
            let index: usize = c as usize - 97;
            counter[index] += 1;
            if counter[index] % 2 == 1 {
                odd_counter += 1;
            } else {
                odd_counter -= 1;
            }
        }
        odd_counter - k < 1 && s.len() as i32 >= k
    }
}