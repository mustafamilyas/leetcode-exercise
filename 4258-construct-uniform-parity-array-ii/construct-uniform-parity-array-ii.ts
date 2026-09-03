function uniformArray(nums1: number[]): boolean {
    let minEven = Number.MAX_SAFE_INTEGER, minOdd = Number.MAX_SAFE_INTEGER;
    for(let i = 0; i < nums1.length; i++) {
        if(nums1[i] % 2) minOdd = Math.min(minOdd, nums1[i])
        else minEven = Math.min(minEven, nums1[i])
    }
    if(minEven == Number.MAX_SAFE_INTEGER || minOdd == Number.MAX_SAFE_INTEGER) return true;
    return minOdd < minEven;
};