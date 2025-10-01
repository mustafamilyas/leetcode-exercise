impl Solution {
    pub fn num_water_bottles(num_bottles: i32, num_exchange: i32) -> i32 {
        let mut total = num_bottles;
        let mut remaining = num_bottles;
        while remaining >= num_exchange {
            let new_bottle = remaining / num_exchange;
            remaining += new_bottle - new_bottle * num_exchange;
            total += new_bottle;
        }
        total
    }
}