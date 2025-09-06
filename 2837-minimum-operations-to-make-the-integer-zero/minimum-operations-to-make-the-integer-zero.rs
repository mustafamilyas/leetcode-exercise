impl Solution {
    pub fn make_the_integer_zero(num1: i32, num2: i32) -> i32 {
        let mut i = 1i64;
        loop {
            let x = num1 as i64 - num2 as i64 * i;
            if x < i {
                return -1;
            }
            if i >= x.count_ones() as i64 {
                return i as i32
            }
            i += 1;
        }
    }
}

/*
    fn(0) = num1
    fn(1) = fn(0) - (2 ^ i + num2) 
    fn(2) = fn(1) - (2 ^ j + num2) 

*/