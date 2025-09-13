impl Solution {
    pub fn max_freq_sum(s: String) -> i32 {
        let mut freq = [0; 26];
        let mut vocal_max = 0;
        let mut conso_max = 0;
        for c in s.chars() {
            let index = (c as u8 - b'a') as usize;
            freq[index] += 1;
            match c {
                'a' | 'i' | 'u' | 'e' | 'o' => vocal_max = vocal_max.max(freq[index]),
                _ => conso_max = conso_max.max(freq[index])
            }
        }
        vocal_max + conso_max
    }
}