impl Solution {
    pub fn max_free_time(event_time: i32, k: i32, start_time: Vec<i32>, end_time: Vec<i32>) -> i32 {
        let mut total_free_times = 0;
        let mut max_free_times = 0;
        let end = std::cmp::min(k as usize + 1, end_time.len() + 1);
        for i in 0..end {
            let cur_start = start_time.get(i).unwrap_or(&event_time);
            let prev_end = end_time.get(i - 1).unwrap_or(&0);
            total_free_times += cur_start - prev_end;
        }
        max_free_times = total_free_times;
        for i in end..=end_time.len() {
            let c_s = start_time.get(i).unwrap_or(&event_time);
            let c_e = end_time.get(i - 1).unwrap_or(&0);
            let p_s = start_time.get(i - k as usize - 1).unwrap_or(&0);
            let p_e = end_time.get(i - k as usize - 2).unwrap_or(&0);
            total_free_times += c_s - c_e - p_s + p_e;
            max_free_times = std::cmp::max(max_free_times, total_free_times);
        }
        max_free_times
    }
}