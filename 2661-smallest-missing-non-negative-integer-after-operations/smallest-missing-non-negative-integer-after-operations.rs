impl Solution {
    pub fn find_smallest_integer(nums: Vec<i32>, value: i32) -> i32 {
        let mut mods = vec![0; value as usize];
        for n in nums.iter() {
            let idx = if *n >= 0 { n % value } else { (value - (n.abs() % value)) % value };
            mods[idx as usize] += 1;
        }
        for n in 0..nums.len() {
            let idx = n % value as usize;
            if mods[idx] == 0 { return n as i32 }
            mods[idx] -= 1;
        }
        nums.len() as i32
    }
}