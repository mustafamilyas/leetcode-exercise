function minOperations(nums: number[], k: number): number {
    const source = new Array(20).fill(0); // Math.log2(10 ** 6) = 19.2
    const target = new Array(20).fill(0);
    let i = 0;
    while (k >= 1){
        const value = k & 1;
        target[i++] += value;
        k >>= 1
    };
    for(let k of nums) {
        i = 0
        while (k >= 1){
            const value = k & 1;
            source[i++] += value;
            k >>= 1
        };
    }
    let counter = 0;
    for(let i = 0; i < 20; i++) {
        if(target[i] % 2 !== source[i] % 2) counter++
    }
    return counter
};