impl Solution {
    pub fn find_the_prefix_common_array(a: Vec<i32>, b: Vec<i32>) -> Vec<i32> {
        let mut index: Vec<usize> = vec![0; a.len()];
        let mut counter: Vec<i32> = vec![0; a.len()];

        for (i, v) in a.iter().enumerate() {
            let idx = *v as usize - 1;
            index[idx] = i;
        }

        for (i, v) in b.iter().enumerate() {
            let idx = *v as usize - 1;
            let resolved_idx = std::cmp::max(i, index[idx]) as usize;
            counter[resolved_idx] += 1;
        }
        
        let mut acc = 0;
        for elem in &mut counter {
            *elem += acc;
            acc = *elem;
        }

        counter
    }
}