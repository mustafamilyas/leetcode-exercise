impl Solution {
    pub fn xor_all_nums(nums1: Vec<i32>, nums2: Vec<i32>) -> i32 {
        let is_zero_1 = nums2.len() % 2 == 0;
        let is_zero_2 = nums1.len() % 2 == 0;
        let mut result = 0;
        if !is_zero_1 {
            for v in nums1 {
                result ^= v;
            }
        }
        if !is_zero_2 {
            for v in nums2 {
                result ^= v;
            }
        }
        result
    }
}

// x1 x2 y1 y2
// (x1 ^ y1) ^ (x1 ^ y2) ^ (x2 ^ y1) ^ (x2 ^ y2)
// x1 x2 y1 y2 y3
// (x1 ^ y1) ^ (x1 ^ y2) ^ (x1 ^ y3) ^ (x2 ^ y1) ^ (x2 ^ y2) ^ (x2 ^ y3)