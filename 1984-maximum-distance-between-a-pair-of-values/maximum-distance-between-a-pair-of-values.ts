function maxDistance(nums1: number[], nums2: number[]): number {
    let i1 = 0, i2 = 0, max = 0;
    while(i1 < nums1.length && i2 < nums2.length) {
        while(nums1[i1] <= nums2[i2] && i2 < nums2.length) i2++
        if(nums1[i1] <= nums2[i2 - 1]) max = Math.max(max, i2 - i1 - 1);
        i1++
    }
    return max;
};