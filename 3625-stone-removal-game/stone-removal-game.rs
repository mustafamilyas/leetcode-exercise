impl Solution {
    pub fn can_alice_win(n: i32) -> bool {
        let mut removed_stones = 10;
        let mut remaining = n;
        while remaining >= removed_stones {
            remaining -= removed_stones;
            removed_stones -= 1;
        }
        removed_stones % 2 == 1
    }
}