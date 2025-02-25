const UPPER_LIMIT = 10 ** 9 + 7;
function numOfSubarrays(arr: number[]): number {
    let odd = 0, even = 0, count = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2) {
            const nextOdd = even + 1
            even = odd
            odd = nextOdd
        } else {
            even++    
        }
        count = (count + odd) % UPPER_LIMIT
    }
    return count
};