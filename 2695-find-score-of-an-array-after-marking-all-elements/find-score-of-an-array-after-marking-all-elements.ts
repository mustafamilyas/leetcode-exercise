function findScore(nums: number[]): number {
    const numsIdx = nums.map((v, i)=>[v, i])
    numsIdx.sort((a, b)=>a[0] === b[0] ? b[1] - a[1] : b[0] - a[0]);
    let sum = 0;
    const seen = new Set();
    while(numsIdx.length) {
        const [value, idx] = numsIdx.pop();
        if(seen.has(idx)) continue;
        sum += value;
        seen.add(idx)
        seen.add(idx + 1)
        seen.add(idx - 1)
    }
    return sum;
};