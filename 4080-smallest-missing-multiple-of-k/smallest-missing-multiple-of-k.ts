function missingMultiple(nums: number[], k: number): number {
    const set = new Set(nums);
    let i = 1; 
    while(i <= 100) {
        if(!set.has(k * i)) break;
        i++;
    }
    return i * k;
};