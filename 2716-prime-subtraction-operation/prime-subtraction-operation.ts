function primeSubOperation(nums: number[]): boolean {
    const prime = new Array(1000);
    const diffMap = new Map<number, number>();
    for(let i = 0; i < nums.length; i++) {
        const diff = nums[i] - (nums?.[i - 1] ?? 0) - 1;
        if(diff < 0 && i > 0) return false;
        if(diff < 2) continue;
        const max = getMaxPrime(diff);
        nums[i] -= max;
    }
    return true;
    function getMaxPrime(maxDiff: number) {
        if(diffMap.has(maxDiff)) return diffMap.get(maxDiff)
        for(let i = maxDiff; i > 2; i--) {
            if(isPrime(i)) {
                diffMap.set(maxDiff, i)
                return i;
            }
        }
        diffMap.set(maxDiff, 2)
        return 2;
    }

    function isPrime(num: number) {
        if(prime[num - 1]) return prime[num - 1]
        const start = Math.floor(num / 2);
        for(let i = start; i > 1; i--) {
            if(num % i === 0) {
                prime[num - 1] = false;
                return false;
            }
        }
        prime[num - 1] = true;
        return true;
    }
}; 