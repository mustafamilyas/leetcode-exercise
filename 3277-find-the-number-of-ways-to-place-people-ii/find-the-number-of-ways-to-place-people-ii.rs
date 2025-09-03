impl Solution {
    pub fn number_of_pairs(mut points: Vec<Vec<i32>>) -> i32 {
        points.sort_by(|a, b| if a[0] == b[0] { b[1].cmp(&a[1]) } else { a[0].cmp(&b[0]) });
        let mut res = 0;
        for i in 0..(points.len() - 1) {
            let highest_y = points[i][1];
            let mut lowest_y = i32::MIN;
            for k in (i + 1)..points.len() {
                let cur_y = points[k][1];
                if cur_y > lowest_y && cur_y <= highest_y {
                    res += 1;
                    lowest_y = cur_y;
                }
            }
        }

        res
    }
}

