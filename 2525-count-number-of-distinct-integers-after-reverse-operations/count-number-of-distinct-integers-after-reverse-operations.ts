function countDistinctIntegers(nums: number[]): number {
    const unique = new Set();
    for(const n of nums) {
        unique.add(n)
        unique.add(reverse(n))
    }
    return unique.size;
};

function reverse(n: number): number {
    let reverse = 0;
    while(n > 0) {
        const cur = n % 10;
        reverse = reverse * 10 + cur;
        n = Math.floor(n / 10);
    }
    return reverse;
}