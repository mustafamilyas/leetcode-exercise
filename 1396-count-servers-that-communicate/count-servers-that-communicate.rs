impl Solution {
    pub fn count_servers(grid: Vec<Vec<i32>>) -> i32 {
        let m = grid.len();
        let n = if grid.len() > 0 { grid[0].len() } else { 0 };
        let mut servers = 0;
        let mut row_servers = vec![0; m];
        let mut col_servers = vec![0; n];

        for (i, row) in grid.iter().enumerate() {
            for (k, cell) in row.iter().enumerate() {
                if *cell == 0 {
                    continue
                }
                row_servers[i] += 1;
                col_servers[k] += 1;
            }
        }
        for (i, row) in grid.iter().enumerate() {
            for (k, cell) in row.iter().enumerate() {
                if *cell == 0 {
                    continue
                }
                if row_servers[i] > 1 || col_servers[k] > 1 {
                    servers += 1;
                } 
            }
        }
        servers
    }
}