function findDifferentBinaryString(nums: string[]): string {
    let notAllowedSet = new Set<number>();
    let lowestAllowed = 0;
    for(const n of nums) {
        notAllowedSet.add(parseInt(n, 2))
        while(notAllowedSet.has(lowestAllowed)) {
            lowestAllowed++
        }
    }
    return lowestAllowed.toString(2).padStart(nums[0].length, '0')
};