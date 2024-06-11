function relativeSortArray(arr1: number[], arr2: number[]): number[] {
    const count = new Map<number, number>();
    for(const n of arr1) {
        count.set(n, (count.get(n) ?? 0) + 1)
    }
    const result = []
    for(const n of arr2) {
        const num = count.get(n);
        result.push(... new Array(num).fill(n));
        count.delete(n)
    }
    const keys = Array.from(count.keys());
    keys.sort((a,b)=>a-b);
    for(const n of keys) {
        const num = count.get(n);
        result.push(... new Array(num).fill(n))
    }
    return result;
};