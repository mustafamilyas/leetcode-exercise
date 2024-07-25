function sortArray(nums: number[]): number[] {
    return mergeSort(nums, 0, nums.length - 1);
};

function mergeSort(nums: number[], start: number, end: number): number[] {
    if(end < start) return []
    if(end === start) return [nums[start]];

    const mid = Math.floor((start + end) / 2)
    const left = mergeSort(nums, start, mid)
    const right = mergeSort(nums, mid + 1, end);
    return merge(left, right)
}

function merge(leftArr: number[], rightArr: number[]): number[] {
    const result = [];
    let left = 0;
    let right = 0;
    while(left < leftArr.length && right < rightArr.length) {
        if(leftArr[left] < rightArr[right]) {
            result.push(leftArr[left++])
        } else {
            result.push(rightArr[right++])
        }
    }
    
    while(left < leftArr.length) {
        result.push(leftArr[left++])
    }
    
    while(right < rightArr.length) {
        result.push(rightArr[right++])
    }
    
    return result;
}