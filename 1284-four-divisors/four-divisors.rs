use std::collections::HashMap;

impl Solution {
    pub fn sum_four_divisors(nums: Vec<i32>) -> i32 {
        let mut sum = 0;
        let mut map: HashMap<i32, (i32, i32)> = HashMap::new();
        for n in nums.iter() {
            let (divisor, local_sum) = if let Some(v) = map.get(n) {
                v
            } else {
                let mut divisor = 0;
                let mut local_sum = n + 1;
                let end = (*n as f64).sqrt() as i32;
                for i in 2..=end {
                    if n % i == 0 {
                        let pair = n / i;
                        divisor += if pair == i { 1 } else { 2 };
                        local_sum += if pair == i { 2 * i } else { i + pair };
                    }
                }
                map.insert(*n, (divisor, local_sum));
                &(divisor, local_sum)
            };
            if *divisor == 2 {
                sum += local_sum; 
            }
        }
        sum
    }

    
}

