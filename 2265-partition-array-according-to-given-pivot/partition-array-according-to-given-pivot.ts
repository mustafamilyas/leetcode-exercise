function pivotArray(nums: number[], pivot: number): number[] {
    const left = [], mid = [], right = [];
    for(const n of nums) {
        if(n < pivot) left.push(n)
        else if (n == pivot) mid.push(n)
        else right.push(n)
    }
    return [...left, ...mid, ...right]
};