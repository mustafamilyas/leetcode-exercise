impl Solution {
    pub fn generate(num_rows: i32) -> Vec<Vec<i32>> {
        let mut res: Vec<Vec<i32>> = vec![vec![1]];
        for i in 1..num_rows {
            let prev = &res[res.len() - 1];
            let mut next = vec![];
            for k in 0..=prev.len() {
                let a = prev.get(k as usize - 1).unwrap_or(&0);
                let b = prev.get(k as usize).unwrap_or(&0);
                next.push(a + b);
            }
            res.push(next);
        }
        res
    }
}