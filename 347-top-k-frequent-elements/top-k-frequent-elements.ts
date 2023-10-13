function topKFrequent(nums: number[], k: number): number[] {
    const map = {};
    for(const n of nums) {
        if(!map[n]) {
            map[n] = 0;
        }
        map[n]++
    }
    const entries = Object.entries(map) as [string, number][];
    entries.sort((a,b)=>b[1] - a[1]);
    return entries.slice(0, k).map((item)=>parseInt(item[0]));
};