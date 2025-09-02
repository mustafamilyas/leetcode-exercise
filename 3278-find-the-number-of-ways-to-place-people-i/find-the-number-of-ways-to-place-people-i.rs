impl Solution {
    pub fn number_of_pairs(mut points: Vec<Vec<i32>>) -> i32 {
        points.sort_by(|a, b| if a[0] == b[0] { b[1].cmp(&a[1]) } else { a[0].cmp(&b[0]) });
        let mut res = 0;
        for i in 0..points.len() - 1 {
            let upper_y = points[i][1];
            let mut lower_y_limit = i32::MIN;
            for j in (i + 1)..points.len() {
                let current_y = points[j][1];
                if current_y <= upper_y && current_y > lower_y_limit {
                    res += 1;
                    lower_y_limit = current_y;
                    // if this happen, no matter what the value will always intersect with this point
                    if current_y == upper_y { break; }
                }
            }
        }
        res
    }
}