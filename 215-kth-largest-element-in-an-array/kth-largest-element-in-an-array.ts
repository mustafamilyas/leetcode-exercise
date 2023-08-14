function findKthLargest(nums: number[], k: number): number {
    let start = 0;
    let end = nums.length - 1;
    let target = nums.length - k;
    
    do {
        const pivot = partition(nums, target, start, end);
        if(target === pivot) {
            return nums[pivot];
        } else if (target < pivot) {
            end = pivot -1;
        } else {
            start = pivot + 1
        }
    } while(start < end)
    return nums[start]
};

function partition(nums: number[], k: number, start: number, end: number) {
    let low = start;
    let pivot = nums[end];
    
    for(let i = start; i < end; i++) {
        if(nums[i] < pivot) {
            const temp = nums[i]
            nums[i] = nums[low]
            nums[low] = temp;
            low++
        }
    }
    
    const temp = nums[low]
    nums[low] = pivot;
    nums[end] = temp;
    
    return low;
}