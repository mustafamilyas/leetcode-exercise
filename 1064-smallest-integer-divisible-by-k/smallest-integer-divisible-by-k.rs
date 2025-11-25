impl Solution {
    pub fn smallest_repunit_div_by_k(k: i32) -> i32 {
        let mut o: u64 = 0;
        let k = k as u64;
        for i in 0..=k as i32 {
            o = (o * 10 + 1) % k;
            if o % k == 0 {
                return i + 1
            }
        }
        -1
    }
}