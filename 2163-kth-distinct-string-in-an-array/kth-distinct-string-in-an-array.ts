function kthDistinct(arr: string[], k: number): string {
    const seen = new Set<string>();
    const unique = new Set<string>();
    for(const c of arr) {
        if(unique.has(c)) {
            unique.delete(c);
        } else {
            if(!seen.has(c)) {
                seen.add(c)
                unique.add(c)
            }
        }
    }
    return Array.from(unique)[k - 1] ?? ''
};