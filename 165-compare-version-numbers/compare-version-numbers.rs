impl Solution {
    pub fn compare_version(version1: String, version2: String) -> i32 {
        let v1: Vec<i64> = version1.split(".").map(|v| v.parse().unwrap()).collect();
        let v2: Vec<i64> = version2.split(".").map(|v| v.parse().unwrap()).collect();
        let max_length = v1.len().max(v2.len());
        for i in 0..max_length {
            let cur_v1 = v1.get(i).unwrap_or(&0);
            let cur_v2 = v2.get(i).unwrap_or(&0);
            if cur_v1 > cur_v2 {
                return 1
            } else if cur_v1 < cur_v2 {
                return -1
            }
        }
        0
    }
}