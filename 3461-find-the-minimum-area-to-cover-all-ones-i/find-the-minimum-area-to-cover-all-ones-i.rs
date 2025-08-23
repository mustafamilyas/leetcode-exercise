impl Solution {
    pub fn minimum_area(grid: Vec<Vec<i32>>) -> i32 {
        let mut l = i32::MAX;
        let mut r = i32::MIN;
        let mut t = i32::MAX;
        let mut b = i32::MIN;
        let m = grid.len();
        let n = grid[0].len();
        for i in 0..m {
            for k in 0..n {
                if grid[i][k] == 1 {
                    l = l.min(k as i32);
                    r = r.max(k as i32);
                    t = t.min(i as i32);
                    b = b.max(i as i32);
                }
            }
        }
        (r - l + 1) * (b - t + 1)
    }
}