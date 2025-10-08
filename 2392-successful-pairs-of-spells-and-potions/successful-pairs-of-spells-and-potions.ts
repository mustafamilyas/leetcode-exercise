function successfulPairs(spells: number[], potions: number[], success: number): number[] {
    const result = [];
    potions.sort((a,b)=>a-b)

    function findFirstPair(n: number): number {
        let start = 0;
        let end = potions.length - 1;

        while(start < end) {
            const mid = start + Math.ceil((end - start) / 2)        
            if(potions[mid] * n >= success) {
                end = mid - 1;
            } else {
                start = mid;
            }
        }
        return potions[end] * n >= success ? end - 1 : end;
    }

    for(const spell of spells) {
        const first = findFirstPair(spell)
        result.push(potions.length - first - 1)
    }

    return result;
};