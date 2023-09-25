/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let left = m - 1;
    let right = n - 1;
    for(let i = nums1.length - 1; i >= 0; i--) {
        if((left >= 0 && nums1[left] >= nums2[right]) || right < 0) {
            nums1[i] = nums1[left]
            left--
        } else {
            nums1[i] = nums2[right]
            right--
        }
    }
};