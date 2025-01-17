impl Solution {
    pub fn does_valid_array_exist(derived: Vec<i32>) -> bool {
        for initial_value in 0..2 {
            let mut original: Vec<i32> = vec![0; derived.len()];
            original[0] = initial_value;
            for _i in 0..original.len() {
                let i = _i as usize; 
                let next_idx = if i < derived.len() - 1 {
                    i + 1
                } else {
                    0
                };
                let mut next_value = 0;
                if derived[i] == 0 {
                    if original[i] == 0 {
                        next_value = 0;
                    } else {
                        next_value = 1;
                    }
                } else {
                    if original[i] == 0 {
                        next_value = 1;
                    } else {
                        next_value = 0;
                    }
                }
                if i == derived.len() - 1 && original[0] == next_value {
                    return true;
                }
                original[next_idx] = next_value;
            }
        }
        false
    }
}