function findTargetSumWays(nums: number[], target: number): number {
    let prevValueCount = new Map<number, number>([[0, 1]]);
    let curValueCount = new Map<number, number>();
    for(const n of nums) {
        for(const [k, v] of prevValueCount.entries()) {
            curValueCount.set(k - n, (curValueCount.get(k - n) ?? 0) + v)
            curValueCount.set(k + n, (curValueCount.get(k + n) ?? 0) + v)
        }
        prevValueCount = curValueCount; 
        curValueCount = new Map<number, number>();
    }
    return prevValueCount.get(target) ?? 0;
};