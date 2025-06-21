impl Solution {
    pub fn max_distance(s: String, k: i32) -> i32 {
        let mut counter = [0; 4];
        let mut max = 0;
        for s in s.chars() {
            match s {
                'N' => counter[0] += 1,
                'S' => counter[1] += 1,
                'E' => counter[2] += 1,
                'W' => counter[3] += 1,
                _ => unreachable!()
            }
            let mut k = k;
            let mut max_h = std::cmp::max(counter[0], counter[1]);
            let mut min_h = std::cmp::min(counter[0], counter[1]);
            let mut max_w = std::cmp::max(counter[2], counter[3]);
            let mut min_w = std::cmp::min(counter[2], counter[3]);
            if k >= min_h {
                k -= min_h;
                max_h += min_h;
                min_h = 0;
            } else if k > 0 {
                min_h -= k;
                max_h += k;
                k = 0;
            }
            if k >= min_w {
                k -= min_w;
                max_w += min_w;
                min_w = 0;
            } else if k > 0 {
                min_w -= k;
                max_w += k;
                k = 0;
            }
            max = std::cmp::max(
                max,
                max_h - min_h + max_w - min_w
            );
        }
        max
    }
}