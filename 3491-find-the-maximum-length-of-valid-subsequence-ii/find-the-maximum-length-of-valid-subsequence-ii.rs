impl Solution {
    pub fn maximum_length(nums: Vec<i32>, k: i32) -> i32 {
        let k = k as usize;
        let mut counter: Vec<Vec<i32>> = vec![vec![0; k]; k];
        for &v in nums.iter() {
            let idx = v as usize % k;
            for i in 0..k {
                if idx == i {
                    counter[i][i] += 1;
                    continue;
                }
                if counter[idx][i] % 2 == 1 {
                    counter[idx][i] += 1;
                }
                if counter[i][idx] % 2 == 0 {
                    counter[i][idx] += 1;
                }
            }
        }
        *counter.iter().flat_map(|row| row.iter()).max().unwrap_or(&0)
    }
}

/*
  0 1 2 3
0   
1   1
2
*/