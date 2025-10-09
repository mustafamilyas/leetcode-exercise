impl Solution {
    pub fn successful_pairs(spells: Vec<i32>, mut potions: Vec<i32>, success: i64) -> Vec<i32> {
        let mut res = vec![0; spells.len()];
        let n = potions.len();
        potions.sort();
        for (i, val) in spells.iter().enumerate() {
            if n == 0 { continue }
            let mut left = 0;
            let mut right = n;
            while left < right {
                let mid = (left + right) / 2;
                let mid_value = potions[mid] as i64 * *val as i64;
                if mid_value < success {
                    left = mid + 1;
                } else {
                    right = mid;
                }
            }
            res[i] = n as i32  - right as i32;
        }
        res
    }
}