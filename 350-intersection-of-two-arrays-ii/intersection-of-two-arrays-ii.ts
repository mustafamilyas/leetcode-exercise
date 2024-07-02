function intersect(nums1: number[], nums2: number[]): number[] {
    const map = {}

    for(const n of nums1) {
        if(map[n]) map[n]++
        else map[n] = 1;
    }

    const result = [];
    for(const n of nums2) {
        if(map[n]) {
            map[n]--
            result.push(n)
        }
    }
    
    return result;
};