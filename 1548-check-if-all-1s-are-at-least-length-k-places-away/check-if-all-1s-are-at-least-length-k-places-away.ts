function kLengthApart(nums: number[], k: number): boolean {
    let count = 0;
    let first = true;
    for(const n of nums) {
        if(n == 1) {
            if(first) {
                first = false
                count = 0;
            } else if(count < k) return false
            else count = 0
        } else {
            count++;
        }
    }
    return true  
};