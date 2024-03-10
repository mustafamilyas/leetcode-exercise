function intersection(nums1: number[], nums2: number[]): number[] {
    const counter1 = new Set(nums1)
    const counter2 = new Set<number>();
    for(const n of nums2) {
        if(counter1.has(n)) counter2.add(n)
    }
    return Array.from(counter2);
};