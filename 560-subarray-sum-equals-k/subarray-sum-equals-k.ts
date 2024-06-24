function subarraySum(nums: number[], k: number): number {
    const map = new Map<number, number>([[0, 1]]);
    let count = 0, sum = 0;
    for(const n of nums) {
        sum += n;
        const counterpart = sum - k;
        if(map.has(counterpart)) {
            count += map.get(counterpart)
        }
        map.set(sum, (map.get(sum) ?? 0) + 1)
    }
    return count;
};