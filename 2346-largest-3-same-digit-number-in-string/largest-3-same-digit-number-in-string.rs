impl Solution {
    pub fn largest_good_integer(num: String) -> String {
        let bytes = num.as_bytes();
        let mut largest: Option<u8> = None;

        for w in bytes.windows(3) {
            if w[0] == w[1] && w[1] == w[2] {
                if largest.map_or(true, |b| w[0] > b) {
                    largest = Some(w[0])
                }
            }
        }

        match largest {
            Some(b) => String::from_utf8(vec![b, b, b]).unwrap(),
            None => String::new()
        }
    }
}