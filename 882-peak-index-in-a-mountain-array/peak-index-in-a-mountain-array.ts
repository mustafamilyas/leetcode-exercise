function peakIndexInMountainArray(arr: number[]): number {
    let start = 0, end = arr.length - 1;
    while(start <= end) {
        const mid = start + Math.ceil((end - start) / 2)
        if(arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
            return mid;
        } else if (arr[mid - 1] > arr[mid] && arr[mid] > arr[mid + 1]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
};