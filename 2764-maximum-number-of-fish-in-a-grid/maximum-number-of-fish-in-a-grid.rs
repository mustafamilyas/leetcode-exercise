impl Solution {
    pub fn find_max_fish(grid: Vec<Vec<i32>>) -> i32 {
        let m = grid.len();
        if m < 1 {
            return 0;
        }
        let n = grid[0].len();
        let mut visited: Vec<Vec<bool>> = vec![vec![false; n]; m];
        let mut max = 0;
        for (i, row) in grid.iter().enumerate() {
            for (k, cell) in row.iter().enumerate() {
                if *cell > 0 && visited[i][k] == false {
                    max = std::cmp::max(max, Self::get_max_fish(&grid, &mut visited, i, k));
                }
            }
        }
        max
    }

    pub fn get_max_fish(grid: &Vec<Vec<i32>>, visited: &mut Vec<Vec<bool>>, x: usize, y: usize) -> i32 {
        if visited[x][y] == true || grid[x][y] == 0 { return 0; }
        let movements: [[isize; 2]; 4] = [[0, 1], [0, -1], [-1, 0], [1, 0]];
        let m = grid.len() as isize;
        if m < 1 { return 0; }
        let n = grid[0].len() as isize;
        let mut sum = grid[x][y];
        visited[x][y] = true;
        for [dx, dy] in movements {
            let nx = x as isize + dx;
            let ny = y as isize + dy;
            if nx < 0 || nx >= m || ny < 0 || ny >= n { continue; }
            sum += Self::get_max_fish(grid, visited, nx as usize, ny as usize);
        }
        sum
    }
}