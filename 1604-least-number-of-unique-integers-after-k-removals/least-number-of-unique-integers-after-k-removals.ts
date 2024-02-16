function findLeastNumOfUniqueInts(arr: number[], k: number): number {
    const map = new Map<number, number>();
    for(const n of arr) {
        map.set(n, (map.get(n) ?? 0) + 1)
    }
    const values = Array.from(map.values());
    values.sort((a,b)=>b-a);
    for(let i = values.length - 1; i >= 0 && k > 0; i--) {
        k -= values[i];
        if(k >= 0) values.pop();
    }
    return values.length;
};