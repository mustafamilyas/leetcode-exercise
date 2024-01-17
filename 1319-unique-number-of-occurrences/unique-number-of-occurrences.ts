function uniqueOccurrences(arr: number[]): boolean {
    const map = new Map<number, number>();
    for(const value of arr) {
        map.set(value, (map.get(value) ?? 0) + 1)
    }
    const set = new Set(map.values());
    return map.size === set.size;
};