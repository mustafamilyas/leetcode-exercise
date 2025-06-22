impl Solution {
    pub fn divide_string(s: String, k: i32, fill: char) -> Vec<String> {
        let mut res = vec![];
        let mut i = 0;
        while i < s.len() {
            let next = std::cmp::min(i + k as usize, s.len());   
            let mut slice = String::from(&s[i..next as usize]);
            if slice.len() < k as usize {
                slice.push_str(&fill.to_string().repeat(k as usize - slice.len()));
            } 
            res.push(slice);
            i = next;
        }
        res
    }
}