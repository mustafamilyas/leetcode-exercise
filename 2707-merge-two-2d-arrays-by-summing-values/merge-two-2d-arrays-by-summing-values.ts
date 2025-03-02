function mergeArrays(nums1: number[][], nums2: number[][]): number[][] {
    let i = 0, k = 0;
    const res = [];
    while(i < nums1.length || k < nums2.length) {
        if(i == nums1.length) {
            res.push(...nums2.slice(k));
            break;
        }
        if(k == nums2.length) {
            res.push(...nums1.slice(i));
            break;
        }
        if(nums1[i][0] === nums2[k][0]) res.push([nums1[i][0], nums1[i++][1] + nums2[k++][1]])
        else if(nums1[i][0] < nums2[k][0]) res.push([nums1[i][0], nums1[i++][1]])
        else res.push([nums2[k][0], nums2[k++][1]])
    }
    return res;
};