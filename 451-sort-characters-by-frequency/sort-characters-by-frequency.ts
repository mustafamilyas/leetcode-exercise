function frequencySort(s: string): string {
    const counter = new Map<string, number>();
    for(const c of s) {
        counter.set(c, (counter.get(c) ?? 0) + 1)
    }
    let result = ''
    const entries = Array.from(counter.entries());
    entries.sort((a, b)=>b[1] - a[1])
    for(const [key, value] of entries) {
        result += key.repeat(value)
    }
    return result;
};