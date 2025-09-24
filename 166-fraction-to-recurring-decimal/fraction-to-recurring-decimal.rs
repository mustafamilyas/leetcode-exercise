use std::collections::HashMap;

impl Solution {
    pub fn fraction_to_decimal(numerator: i32, _d: i32) -> String {
        if numerator == 0 { return "0".into(); }
        let sign = if (numerator < 0 && _d < 0) || (numerator >= 0 && _d >= 0) { "" } else { "-" };
        let mut res = String::new();
        let mut cur = (numerator as i64).abs();
        let denominator = (_d as i64).abs();
        let mut map: HashMap<i64, usize> = HashMap::new();
        let next = cur / denominator;
        cur = cur % denominator;
        res.push_str(&format!("{sign}{next}"));
        if cur == 0 {
            return res
        }
        cur *= 10;
        res.push('.');
        while cur > 0 && res.len() < 10000 {
            if let Some(idx) = map.get(&cur) {
                return format!("{}({})", &res[0..*idx], &res[*idx..]);
            }
            map.insert(cur, res.len());
            let next = cur / denominator;
            cur = cur % denominator;
            res.push_str(&format!("{next}"));
            cur *= 10;
        }
        res
    }
}