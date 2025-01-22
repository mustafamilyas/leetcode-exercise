use std::collections::VecDeque;

impl Solution {
    pub fn highest_peak(is_water: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        let movements = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        let (m, n) = match Self::get_dimensions(&is_water) {
            Some(dimension) => dimension,
            None => (0, 0)
        };
        let mut res: Vec<Vec<i32>> = vec![vec![-1; n]; m];
        let mut queue: VecDeque<(usize, usize)> = VecDeque::new();

        for (i, row) in is_water.iter().enumerate() {
            for (k, col) in row.iter().enumerate() {
                if *col == 1 {
                    res[i][k] = 0;
                    queue.push_back((i, k));
                }
            }
        }

        while !queue.is_empty() {
            if let Some(pos) = queue.pop_front() {
                let (x, y) = pos;
                let cur_value = res[x][y];

                for d in movements {
                    let [dx, dy] = d;
                    let nx = x as isize + dx;
                    let ny = y as isize + dy;

                    if nx < 0 || ny < 0 || nx >= m as isize || ny >= n as isize || res[nx as usize][ny as usize] >= 0 {
                        continue;
                    }
                    res[nx as usize][ny as usize] = cur_value + 1;
                    queue.push_back((nx as usize, ny as usize));
                }
            }
        }
        res
    }

    pub fn get_dimensions<T>(matrix: &Vec<Vec<T>>) -> Option<(usize, usize)> {
        if matrix.is_empty() {
            return None
        }

        let m = matrix.len();
        let n = matrix[0].len();
        Some((m, n))
    }
}