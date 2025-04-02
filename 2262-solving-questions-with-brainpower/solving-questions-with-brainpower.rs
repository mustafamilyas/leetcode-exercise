impl Solution {
    pub fn most_points(questions: Vec<Vec<i32>>) -> i64 {
        let mut memo = vec![-1; questions.len()];
        Self::recurse(&questions, 0, &mut memo)
    }

    pub fn recurse(questions: &Vec<Vec<i32>>, idx: usize, memo: &mut Vec<i64>) -> i64 {
        if idx >= questions.len() {
            return 0
        }
        if memo[idx] != -1 {
            return memo[idx]
        }
        let value = questions[idx][0];
        let skip_count = questions[idx][1];
        let take = value as i64 + Self::recurse(questions, idx + 1 + skip_count as usize, memo); 
        let skip = Self::recurse(questions, idx + 1, memo);
        memo[idx] = take.max(skip);
        memo[idx] 
    }
}

/*
    [3, 2], [4, 3], [4, 4], [2, 5]
Take   3       
Skip   0
*/