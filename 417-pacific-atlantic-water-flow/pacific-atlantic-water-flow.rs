const MOVEMENT: [[i32; 2]; 4] = [[0, 1], [0, -1], [1, 0], [-1, 0]];
impl Solution {
    pub fn pacific_atlantic(heights: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        let m = heights.len();
        let n = heights[0].len();
        let mut res = vec![];
        let mut ocean_flags = vec![vec![0; n]; m];
        let mut visited = vec![vec![false; n]; m];
        let mut queue = vec![];
        for i in 0..m {
            queue.push([i, 0])
        }
        for i in 1..n {
            queue.push([0, i])
        }
        while queue.len() > 0 {
            let top = queue.pop().unwrap();
            let x = top[0];
            let y = top[1];
            ocean_flags[x][y] |= 1;
            visited[x][y] = true;
            for d in MOVEMENT.iter() {
                if (d[0] < 0 && x == 0) || (d[1] < 0 && y == 0) { continue }
                let nx = x + d[0] as usize;
                let ny = y + d[1] as usize;
                if nx >= m || ny >= n || visited[nx][ny] || heights[x][y] > heights[nx][ny] { continue }
                queue.push([nx, ny]);
            }
        }
        let mut visited = vec![vec![false; n]; m];
        for i in 0..m {
            queue.push([i, n - 1])
        }
        for i in 0..n-1 {
            queue.push([m - 1, i])
        }
        while queue.len() > 0 {
            let top = queue.pop().unwrap();
            let x = top[0];
            let y = top[1];
            if ocean_flags[x][y] == 1 {
                res.push(vec![x as i32, y as i32]);
            }
            ocean_flags[x][y] |= 2;
            visited[x][y] = true;
            for d in MOVEMENT.iter() {
                if (d[0] < 0 && x == 0) || (d[1] < 0 && y == 0) { continue }
                let nx = x + d[0] as usize;
                let ny = y + d[1] as usize;
                if nx >= m || ny >= n || visited[nx][ny] || heights[x][y] > heights[nx][ny] { continue }
                queue.push([nx, ny]);
            }
        }
        res
    }
}