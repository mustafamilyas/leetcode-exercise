impl Solution {
    pub fn number_of_arrays(differences: Vec<i32>, lower: i32, upper: i32) -> i32 {
        let mut lowest = 0i32;
        let mut highest = 0i32;
        let mut current = 0i32;
        for v in differences.iter() {
            current += v;
            lowest = std::cmp::min(current, lowest);
            highest = std::cmp::max(current, highest);
        }
        match highest.checked_sub(lowest) {
            Some(result) => std::cmp::max(0, upper - lower + 1 - result),
            None => 0 
        }        
    }
}