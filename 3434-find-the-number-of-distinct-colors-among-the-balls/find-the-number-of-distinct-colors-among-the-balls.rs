use std::collections::HashMap;

impl Solution {
    pub fn query_results(_limit: i32, queries: Vec<Vec<i32>>) -> Vec<i32> {
        let mut ball_to_color: HashMap<i32, i32> = HashMap::new();
        let mut color_counter: HashMap<i32, i32> = HashMap::new();
        let mut res: Vec<i32> = vec![];
        let mut distinct_counter = 0;

        for query in queries {
            let ball = query[0];
            let color = query[1];

            if let Some(old_color) = ball_to_color.get_mut(&ball) {
                if *old_color != color {
                    if let Some(count) = color_counter.get_mut(old_color) {
                        *count -= 1;
                        if *count == 0 {
                            distinct_counter -= 1;
                        }
                    }
                    *old_color = color;
                    let count = color_counter.entry(color).or_insert(0);
                    if *count == 0 {
                        distinct_counter += 1;
                    }
                    *count += 1;
                }
            } else {
                ball_to_color.insert(ball, color);
                let count = color_counter.entry(color).or_insert(0);
                if *count == 0 {
                    distinct_counter += 1;
                }
                *count += 1;
            }
            res.push(distinct_counter);
        }
        res
    }
}
