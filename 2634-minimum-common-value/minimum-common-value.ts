function getCommon(nums1: number[], nums2: number[]): number {
    let i1 = 0, i2 = 0;
    while(i1 < nums1.length && i2 < nums2.length) {
        if(nums1[i1] === nums2[i2]) return nums1[i1]
        if(nums1[i1] < nums2[i2]) i1++
        else i2++
    }
    return -1;
};