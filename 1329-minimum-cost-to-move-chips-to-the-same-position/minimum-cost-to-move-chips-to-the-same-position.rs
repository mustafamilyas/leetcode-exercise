impl Solution {
    pub fn min_cost_to_move_chips(position: Vec<i32>) -> i32 {
        let mut odd = 0;
        let mut even = 0;
        for value in position.iter() {
            if value % 2 == 1 {
                odd += 1
            } else {
                even += 1
            }
        }
        if odd < even {
            odd
        } else {
            even
        }
    }
}