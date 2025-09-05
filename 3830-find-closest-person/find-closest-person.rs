impl Solution {
    pub fn find_closest(x: i32, y: i32, z: i32) -> i32 {
        let diff_x = (z - x).abs();
        let diff_y = (z - y).abs();
        if diff_x == diff_y {
            0
        } else if diff_x < diff_y {
            1
        } else {
            2
        }
    }
}