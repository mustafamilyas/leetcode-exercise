function maxDotProduct(nums1: number[], nums2: number[]): number {
    const dp = Array.from({ length: nums1.length }, () => new Array(nums2.length).fill(0))
    for(let i = 0; i < nums1.length; i++) {
        for(let k = 0; k < nums2.length; k++) {
            const top = dp?.[i - 1]?.[k] ?? Number.MIN_SAFE_INTEGER;
            const left = dp?.[i]?.[k - 1] ?? Number.MIN_SAFE_INTEGER;
            const prevSum = dp?.[i - 1]?.[k - 1] ?? 0;
            const cur = nums1[i] * nums2[k];
            dp[i][k] = Math.max(top, left, prevSum + cur, cur);
        }
    }
    return dp[nums1.length - 1][nums2.length - 1];
};