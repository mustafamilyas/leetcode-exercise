impl Solution {
    pub fn count_and_say(n: i32) -> String {
        let mut current = "1".to_string();
        for i in 1..n {
            let mut count = 0;
            let mut prev = '0';
            let mut next = String::new();
            for c in current.chars() {
                if prev == c {
                    count += 1;
                } else {
                    if (prev != '0') {
                        next.push_str(&format!("{}{}", count, prev));
                    }
                    prev = c;
                    count = 1;
                }
            }
            if (prev != '0') {
                next.push_str(&format!("{}{}", count, prev));
            }
            current = next;
        }
        current
    }
}


// 1 = 1
// 2 = 11
// 3 = 21
// 4 = 1211
// 5 = 111221
// 6 = 312211
// 7 = 13112221
// 8 = 1113213211
// 9 = 31131211131221