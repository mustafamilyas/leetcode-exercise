impl Solution {
    pub fn number_of_alternating_groups(colors: Vec<i32>, k: i32) -> i32 {
        let mut count = 0;
        let mut i = 0;
        let mut j = 1;
        let length = colors.len();
        while i < length {
            if colors[j % length] != colors[(j - 1) % length] {
                if (j - i + 1) as i32 == k {
                    count += 1;
                    i += 1;
                }
                j += 1;
            } else {
                i = j;
                j += 1;
            }
        }
        count
    }
}