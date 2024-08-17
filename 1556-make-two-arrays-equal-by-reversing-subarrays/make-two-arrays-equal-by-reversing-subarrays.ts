function canBeEqual(target: number[], arr: number[]): boolean {
    if(target.length !== arr.length) return false;
    const targetSet = new Array(1000).fill(0);
    for(const n of target) {
        targetSet[n - 1]++
    }
    for(const n of arr) {
        if(targetSet[n - 1] === 0) return false;
        targetSet[n - 1]--
    }
    return true;
};