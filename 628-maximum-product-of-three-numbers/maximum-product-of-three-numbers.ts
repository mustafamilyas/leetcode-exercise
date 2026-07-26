function maximumProduct(nums: number[]): number {
    let a = -1001, b = -1001, c = -1001, na = 1001, nb = 1001;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > a) {
            c = b;
            b = a;
            a = nums[i];
        } else if(nums[i] > b) {
            c = b;
            b = nums[i];
        } else if(nums[i] > c) {
            c = nums[i]
        }

        if(nums[i] < na) {
            nb = na;
            na = nums[i];
        } else if(nums[i] < nb) {
            nb = nums[i]
        }
    }
    return Math.max(a * b * c, a * na * nb);
};
/*
mxp mxp mxp
mnn mnn mnn
mxn mxn mxp

*/