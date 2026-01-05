impl Solution {
    pub fn max_matrix_sum(matrix: Vec<Vec<i32>>) -> i64 {
        let mut is_negative_even = true;
        let mut smallest_el = i64::MAX;
        let mut sum = 0;
        for row in matrix.iter() {
            for col in row.iter() {
                if *col < 0 {
                    is_negative_even = !is_negative_even;
                }
                let abs = col.abs() as i64;
                sum += abs;
                smallest_el = smallest_el.min(abs);
            }
        }
        if is_negative_even { sum } else { sum - smallest_el * 2 }
    }
}