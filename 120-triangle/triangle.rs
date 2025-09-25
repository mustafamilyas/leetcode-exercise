impl Solution {
    pub fn minimum_total(mut triangle: Vec<Vec<i32>>) -> i32 {
        let m = triangle.len();
        for i in 1..m {
            for k in 0..triangle[i].len() {
                let top_1 = if let Some(v) = triangle[i - 1].get(k - 1) { *v } else { i32::MAX };
                let top_2 = if let Some(v) = triangle[i - 1].get(k) { *v } else { i32::MAX };
                triangle[i][k] += top_1.min(top_2);
            }
        }
        *triangle[m - 1].iter().min().unwrap()
    }
}