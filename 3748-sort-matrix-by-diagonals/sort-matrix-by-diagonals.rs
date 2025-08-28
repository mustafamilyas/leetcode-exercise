impl Solution {
    pub fn sort_matrix(mut grid: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        let n = grid.len() as i32;
        let s = n * -1 + 1;
        for i in s..n {
            let y1 = i.max(0);
            let x1 = if i < 0 { i * -1} else { 0 };
            let step = (n - y1).min(n - x1);
            let mut vec = vec![];
            for i in 0..step {
                vec.push(grid[(y1 + i) as usize][(x1 + i) as usize]);
            }
            if i >= 0 {
                vec.sort_by(|a, b| b.cmp(a));
            } else {
                vec.sort_by(|a, b| a.cmp(b));
            }
            for (i, v) in vec.iter().enumerate() {
                grid[y1 as usize + i][x1 as usize + i] = *v;
            }
        }
        grid
    }
}

/*
[
    [1,7,3,1],
    [9,8,2,4],
    [4,5,6,5],
    [4,5,6,6]
]
*/