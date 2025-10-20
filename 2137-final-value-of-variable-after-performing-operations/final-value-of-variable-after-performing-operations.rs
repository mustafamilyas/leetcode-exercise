impl Solution {
    pub fn final_value_after_operations(operations: Vec<String>) -> i32 {
        let mut value = 0i32;
        for op in operations.iter() {
            match op.as_str() {
                "X++" | "++X" => value += 1,
                "X--" | "--X" => value -= 1,
                _ => {}
            }
        }
        value
    }
}