function threeConsecutiveOdds(arr: number[]): boolean {
    let odd = 0;
    for(const n of arr) {
        if(n % 2) {
            odd++
            if(odd === 3) return true;
        } else {
            odd = 0
        }
    }
    return false
};