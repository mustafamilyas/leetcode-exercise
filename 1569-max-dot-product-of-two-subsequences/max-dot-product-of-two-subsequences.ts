function maxDotProduct(nums1: number[], nums2: number[]): number {
    const dp = Array.from({length: nums1.length}).map(
        ()=>Array.from({length: nums2.length}).map(()=>0)
    )
    for(let i = 0; i < nums1.length; i++) {
        for(let k = 0; k < nums2.length; k++) {
            const cur = nums1[i] * nums2[k]
            if(k === 0 || i === 0) {
                if(k > 0) {
                    dp[i][k] = Math.max(cur, dp[i][k - 1])
                } else if (i > 0) {
                    dp[i][k] = Math.max(cur, dp[i - 1][k])
                } else {
                    dp[i][k] = cur;
                }
            } else {
                const prevD = dp?.[i - 1]?.[k - 1] ?? 0;
                const prevK = dp?.[i]?.[k - 1] ?? 0
                const prevI = dp?.[i - 1]?.[k] ?? 0 
                dp[i][k] = Math.max(prevD + cur, cur, prevD, prevK, prevI)
            }
        }
    }
    return dp[nums1.length - 1][nums2.length - 1]
};