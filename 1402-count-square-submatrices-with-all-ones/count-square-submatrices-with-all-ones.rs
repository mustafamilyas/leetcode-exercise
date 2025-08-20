impl Solution {
    pub fn count_squares(mut matrix: Vec<Vec<i32>>) -> i32 {
        let m = matrix.len();
        let n = matrix[0].len();
        let mut res = 0;
        for i in 0..m {
            for k in 0..n {
                if matrix[i][k] == 1 {
                    let mut min = if let Some (r) = matrix.get(i - 1) { *r.get(k - 1).unwrap_or(&0) } else { 0i32 };
                    let l = if let Some (r) = matrix.get(i ) { *r.get(k - 1).unwrap_or(&0) } else { 0i32 };
                    let d = if let Some (r) = matrix.get(i - 1) { *r.get(k).unwrap_or(&0) } else { 0i32 };
                    min = min.min(l).min(d) + 1;
                    matrix[i][k] = min;
                    res += min;
                }
            }
        }
        res
    }
}