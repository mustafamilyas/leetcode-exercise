function frequencySort(nums: number[]): number[] {
    const map = new Map<number, number>();
    for(const n of nums) {
        map.set(n, (map.get(n) ?? 0) + 1)
    }
    const valueCountTuple = Array.from(map);
    valueCountTuple.sort((a,b)=>{
        if(a[1] === b[1]) {
            return b[0] - a[0]
        }
        return a[1] - b[1]
    })
    return valueCountTuple.flatMap((e)=>new Array(e[1]).fill(e[0]))
};