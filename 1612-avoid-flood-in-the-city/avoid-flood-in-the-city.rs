use std::collections::HashMap;

impl Solution {
    pub fn avoid_flood(rains: Vec<i32>) -> Vec<i32> {
        let mut dry = vec![];
        let mut res = vec![1; rains.len()];
        let mut last_seen = HashMap::new();
        for i in 0..rains.len() {
            if rains[i] == 0 {
                dry.push(i);
            } else {
                res[i] = -1;
                if let Some(last_i) = last_seen.get(&rains[i]) {
                    if dry.len() == 0 {
                        return vec![];
                    }
                    let mut left = 0;
                    let mut right = dry.len() - 1;

                    while left < right {
                        let mid = (left + right) / 2;
                        if dry[mid] < *last_i {
                            left = mid + 1;
                        } else {
                            right = mid;
                        }
                    }
                    if *last_i > dry[left] {
                        return vec![];
                    }
                    res[dry[left]] = rains[i];
                    dry.remove(left);
                }
                last_seen.insert(rains[i], i);
            }
        }
        res
    }
}



/*
[1,2,0,3,4,5,0,0,0,3,1,4,5]
[-1,-1,[1,2],3,[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],-1,-1,-1]
*/