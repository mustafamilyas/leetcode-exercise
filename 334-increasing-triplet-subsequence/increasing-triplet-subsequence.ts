function increasingTriplet(nums: number[]): boolean {
    let first = Number.MAX_SAFE_INTEGER;
    let second = Number.MAX_SAFE_INTEGER;
    for(const n of nums) {
        if(n <= first) first = n
        else if (n <= second) second = n
        else return true
    }
    return false;
};