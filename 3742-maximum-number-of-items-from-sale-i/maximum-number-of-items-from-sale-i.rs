impl Solution {
    pub fn maximum_sale_items(items: Vec<Vec<i32>>, budget: i32) -> i32 {
        let n = items.len();
        let b_max = budget as usize;
        let mut min_price = usize::MAX;

        // 0/1 Knapsack: buying the 1st copy of each item i gives `count` items
        let mut dp = vec![0i32; b_max + 1];

        for i in 0..n {
            let price = items[i][1] as usize;
            min_price = min_price.min(price);

            let mut count = 0;
            for j in 0..n {
                if items[j][0] % items[i][0] == 0 {
                    count += 1;
                }
            }

            if price <= b_max {
                for b in (price..=b_max).rev() {
                    dp[b] = dp[b].max(dp[b - price] + count);
                }
            }
        }

        // Unbounded Knapsack: any remaining budget can buy extra copies
        // of the single cheapest item (each gives +1 item, no extra bonus).
        // Note: if the cheapest item wasn't bought in the 0/1 pass, its 1st
        // copy is strictly better than +1, so `dp` already covers it.
        if min_price <= b_max {
            for b in min_price..=b_max {
                dp[b] = dp[b].max(dp[b - min_price] + 1);
            }
        }

        dp[b_max]
    }
}