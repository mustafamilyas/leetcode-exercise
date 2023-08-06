function deleteAndEarn(nums: number[]): number {
    const memo = {};
    for(const n of nums) {
        if(memo[n]) memo[n] += n
        else memo[n] = n;
    }
    
    const keys = Array.from(new Set(nums));
    keys.sort((a, b)=>a-b)
    let prev = 0;
    let current = memo[keys[0]];
    for(let i = 1; i < keys.length; i++) {
        if(keys[i] - keys[i - 1] > 1) {
            prev = current;
            current = current + memo[keys[i]];
        } else {
            const next = Math.max(current, prev + memo[keys[i]]); 
            prev = current;
            current = next;
        }
    }
    return current
};