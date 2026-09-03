function uniformArray(nums1: number[]): boolean {
    nums1.sort((a, b)=> a - b);
    let seq = 0; // uninitialize, haseven, hasodd
    for(let i = 0; i < nums1.length; i++) {
        const isOdd = nums1[i] % 2 == 1;
        if(seq == 1 && isOdd) return false;
        if(seq == 0) {
            if(isOdd) seq = 2
            else seq = 1
        }
    }
    return true;
};