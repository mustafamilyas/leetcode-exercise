use std::collections::HashMap;

impl Solution {
    pub fn maximum_total_damage(power: Vec<i32>) -> i64 {
        let mut counter: HashMap<i32, i32> = HashMap::new();
        let mut max_damage = 0i64;
        for v in power.iter() {
            *counter.entry(*v).or_insert(0) += 1;
        }
        let mut keys: Vec<_> = counter.keys().cloned().collect();
        keys.sort();
        let mut res = vec![0i64; keys.len()];
        for i in 0..keys.len() {
            let sum = *counter.get(&keys[i]).unwrap() as i64 * keys[i] as i64;
            let prev_3 = if i < 3 { 0 } else {
                res[i - 3] + sum
            };
            // println!("{}. {} {}", keys[i], keys.get(i - 3).unwrap_or(&0), prev_3);
            let prev_2 = if i < 2 { 0 } else {
                let prev_key = keys[i - 2];
                if prev_key < keys[i] - 2 {
                    res[i - 2] + sum
                } else {
                    sum.max(res[i - 2])
                }
            };
            // println!("{}. {} {}", keys[i], keys.get(i - 2).unwrap_or(&0), prev_2);
            let prev_1 = if i < 1 { 0 } else {
                let prev_key = keys[i - 1];
                if prev_key < keys[i] - 2 {
                    res[i - 1] + sum
                } else {
                    sum.max(res[i - 1])
                }
            };
            // println!("{}. {} {}", keys[i], keys.get(i - 1).unwrap_or(&0), prev_1);
            res[i] = prev_3.max(prev_2).max(prev_1).max(sum);
            max_damage = max_damage.max(res[i]);
        }
        // println!("{:?} {:?}", counter, res);
        max_damage
    }
}
