use std::collections::HashMap;

impl Solution {
    pub fn num_rabbits(answers: Vec<i32>) -> i32 {
        let mut hashmap: HashMap<i32, i32> = HashMap::new();
        let mut counter = 0;

        for v in answers.iter() {
            if *v == 0 {
                counter += 1;
            } else {
                if let Some(c) = hashmap.get_mut(v) {
                    if *c == *v {
                        counter += *v + 1;
                        *c = 0;
                    } else {
                        *c += 1;
                    }
                } else {
                    counter += *v + 1;
                    hashmap.insert(*v, 0);
                }
            }
        }
        counter
    }
}