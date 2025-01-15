impl Solution {
    pub fn minimize_xor(num1: i32, num2: i32) -> i32 {
        let mut setbit = 0;
        let mut _num2 = num2;
        let mut res = 0;
        while _num2 > 0 {
            if _num2 & 1 == 1 {
                setbit += 1;
            }
            _num2 >>= 1;
        }
        let mut cur = (2_i32).pow((num1 as f64).log2().floor() as u32);
        while cur > 0 && setbit > 0 {
            if num1 & cur == cur {
                res += cur;
                setbit -= 1;
            }
            cur >>= 1;
        }
        cur = 1;
        while setbit > 0 {
            if num1 & cur == 0 {
                res += cur;
                setbit -= 1;
            }
            cur <<= 1;
        }
        res
    }
}