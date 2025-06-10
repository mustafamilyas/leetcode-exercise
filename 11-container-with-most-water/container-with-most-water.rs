impl Solution {
    pub fn max_area(height: Vec<i32>) -> i32 {
        let mut left: usize = 0;
        let mut right: usize = height.len() - 1;
        let mut max_area = 0i32;
        while left < right {
            let h = std::cmp::min(height[left], height[right]);
            let l = right - left;
            max_area = std::cmp::max(max_area, h * l as i32);
            if height[left] > height[right] {
                right -= 1;
            } else {
                left += 1;
            }
        }
        max_area
    }
}