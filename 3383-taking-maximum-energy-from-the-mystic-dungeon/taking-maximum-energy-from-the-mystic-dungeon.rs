impl Solution {
    pub fn maximum_energy(mut energy: Vec<i32>, k: i32) -> i32 {
        let k = k as usize;
        for i in k..energy.len() {
            energy[i] = energy[i].max(energy[i] + energy[i - k]);
        }
        energy[energy.len().saturating_sub(k)..].iter().max().copied().unwrap_or_default()
    }
}