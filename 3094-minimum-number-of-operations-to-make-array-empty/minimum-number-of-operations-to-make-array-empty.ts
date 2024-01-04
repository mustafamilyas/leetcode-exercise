function minOperations(nums: number[]): number {
    const map = new Map<number, number>();
    for(const n of nums) {
        if(!map.has(n)) map.set(n, 1)
        else map.set(n, map.get(n) + 1)
    }
    let result = 0;
    for(const values of map.values()) {
        if(values === 1) return -1;
        result += Math.ceil(values / 3)
    }
    return result;
};
