function minOperations(nums: number[]): number {
    const map: Record<number, number> = {};
    for(const n of nums) {
        if(map[n] == undefined) map[n] = 1
        else map[n]++
    }
    let result = 0;
    for(const values of Object.values(map)) {
        if(values === 1) return -1;
        result += Math.ceil(values / 3)
    }
    return result;
};
