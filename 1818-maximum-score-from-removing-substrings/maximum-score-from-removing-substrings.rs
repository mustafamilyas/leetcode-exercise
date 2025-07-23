impl Solution {
    pub fn maximum_gain(s: String, x: i32, y: i32) -> i32 {
        let prefer_ab = x >= y;
        let mut gain = 0;
        let mut a_count = 0;
        let mut b_count = 0;
        for v in s.chars() {
            match v {
                'a' => a_count += 1,
                'b' => b_count += 1,
                _ => {
                    let min = a_count.min(b_count);
                    if prefer_ab {
                        gain += y * min;
                    } else {
                        gain += x * min;
                    }
                    a_count = 0;
                    b_count = 0;
                }
            }
            if a_count >= 1 && b_count >= 1 {
                if prefer_ab && v == 'b' {
                    gain += x;
                    a_count -= 1;
                    b_count -= 1;
                } 
                if !prefer_ab && v == 'a' {
                    gain += y;
                    a_count -= 1;
                    b_count -= 1;
                }
            }
        }
        let min = a_count.min(b_count);
        if prefer_ab {
            gain += y * min;
        } else {
            gain += x * min;
        }
        gain
    }
}