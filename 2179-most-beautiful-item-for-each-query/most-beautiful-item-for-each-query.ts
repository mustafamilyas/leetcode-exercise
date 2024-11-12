function maximumBeauty(items: number[][], queries: number[]): number[] {
    const mergedItems = [...items, ...queries.map((i)=>[i, 0])];
    const result = new Map<number, number>();
    let current = 0;
    mergedItems.sort((a, b)=>a[0] - b[0]);
    for(const [key, value] of mergedItems) {
        current = Math.max(current, value);
        result.set(key, current)
    }
    return queries.map((key)=>result.get(key))
};