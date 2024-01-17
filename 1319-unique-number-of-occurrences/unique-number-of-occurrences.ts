function uniqueOccurrences(arr: number[]): boolean {
    const map = new Map<number, number>();
    for(const value of arr) {
        map.set(value, (map.get(value) ?? 0) + 1)
    }
    const set = new Set();
    for(const value of map.values()) {
        if(set.has(value)) return false;
        set.add(value)
    }
    return true;
};