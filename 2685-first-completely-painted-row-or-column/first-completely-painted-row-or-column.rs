use std::collections::HashMap;

impl Solution {
    pub fn first_complete_index(arr: Vec<i32>, mat: Vec<Vec<i32>>) -> i32 {
        let mut position_map: HashMap<i32, (usize, usize)> = HashMap::new();
        let m = mat.len();
        let n = mat.get(0).map(|row| row.len() as i32).unwrap_or(0) as usize;
        let mut row_counter: Vec<usize> = vec![0; m];
        let mut col_counter: Vec<usize> = vec![0; n];
        
        for (i, row) in mat.iter().enumerate() {
            for (k, col) in row.iter().enumerate() {
                position_map.insert(*col, (i, k));
            }
        }

        for (i, v) in arr.iter().enumerate() {
            if let Some(pos) = position_map.get(v) {
                let (x, y) = pos;
                row_counter[*x] += 1;
                col_counter[*y] += 1;
                if row_counter[*x] == n || col_counter[*y] == m {
                    return i as i32;
                }
            }
        }
        (m * n) as i32
    }
}