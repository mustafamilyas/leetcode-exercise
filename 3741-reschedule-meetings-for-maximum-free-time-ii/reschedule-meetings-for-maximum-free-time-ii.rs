use std::collections::HashMap;

impl Solution {
    pub fn max_free_time(event_time: i32, start_time: Vec<i32>, end_time: Vec<i32>) -> i32 {
        let mut unique_spaces = vec![];
        let mut sorted_u_spaces_w_idx = vec![];
        let mut max = 0;
        for i in 0..=start_time.len() {
            let prev = end_time.get(i - 1).unwrap_or(&0);
            let cur = start_time.get(i).unwrap_or(&event_time);
            let space = cur - prev;
            unique_spaces.push(space);
            sorted_u_spaces_w_idx.push((space, i));
            max = std::cmp::max(max, space);
        }
        sorted_u_spaces_w_idx.sort_by_key(|&(v, _)| v);
        // println!("{:?} {:?}", unique_spaces, sorted_u_spaces_w_idx);
        for i in 0..start_time.len() {
            let block = end_time[i] - start_time[i];
            let mut found = false;
            let max_check = if sorted_u_spaces_w_idx.len() < 3 { 0 } else { sorted_u_spaces_w_idx.len() - 3 }; 
            // no need to check all
            for i_i in (max_check..sorted_u_spaces_w_idx.len()).rev() {
                let (v, s_i) = sorted_u_spaces_w_idx[i_i];
                // println!("{} {}", i_i, s_i);
                if v < block {
                    break;
                }
                if s_i != i && s_i != i + 1 {
                    found = true;
                    break;
                }
            }
            // println!("{} {} {} {}", i, block, found, max_check);
            if found {
                max = std::cmp::max(max, block + unique_spaces[i] + unique_spaces.get(i + 1).unwrap_or(&0));
            } else {
                max = std::cmp::max(max, unique_spaces[i] + unique_spaces.get(i + 1).unwrap_or(&0));
            }
        }
        max
    }
}