function minNumberOperations(target: number[]): number {
    let sum = 0;
    let count = 0;
    for(const v of target) {
        if(v > count) {
            sum += v - count
            count = v
        } else {
            count = v
        }
    }
    return sum
};