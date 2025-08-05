impl Solution {
    pub fn num_of_unplaced_fruits(fruits: Vec<i32>, baskets: Vec<i32>) -> i32 {
        let mut unplaced_count = 0;
        let mut filled_baskets = vec![false; baskets.len()];

        for f in fruits {
            let mut i = 0;
            while i < baskets.len() && (baskets[i] < f || filled_baskets[i]) {
                i += 1;
            }
            if let Some(filled_basket) = filled_baskets.get_mut(i) {
                *filled_basket = true;
            } else {
                unplaced_count += 1;
            }
        }
        unplaced_count
    }
}