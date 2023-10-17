function longestConsecutive(nums: number[]): number {
    if(!nums.length) return 0;
    const u = Array.from(new Set(nums));
    u.sort((a,b)=>a-b);
    let max = 1;
    let counter = 1;
    for(let i = 1; i < u.length; i++) {
        if(u[i] - u[i - 1] === 1) {
            counter++;
        } else {
            max = Math.max(max, counter);
            counter = 1;
        }
    }
    return Math.max(counter, max);
};