impl Solution {
    pub fn split_num(num: i32) -> i32 {
        let mut num_vec: Vec<i32> = Vec::new();
        let mut current_num = num;
        let mut result = 0;
        let mut i = 0;
        let mut k = 1;
        while current_num > 0 {
            let remainder = current_num % 10;
            num_vec.push(remainder);
            current_num = current_num / 10;
        };
        num_vec.sort_by(|a, b| b.cmp(a));
        while i < num_vec.len() {
            let first = num_vec[i] * k;
            let second = if i + 1 >= num_vec.len() {
                0
            } else {
                num_vec[i + 1] * k
            };
            result += first + second;
            i += 2;
            k *= 10;
        }
        result
    }
}