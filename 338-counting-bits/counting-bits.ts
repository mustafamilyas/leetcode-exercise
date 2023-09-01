function countBits(n: number): number[] {
    const result = new Array(n + 1);
    for(let i = 0; i <= n; i++) {
        let j = i;
        let counter = 0;
        while(j) {
            if(result[j] !== undefined) {
                counter += result[j]
                break;    
            }
            if((j & 1) === 1) {
                counter++;
            }
            j >>= 1
        }
        result[i] = counter;
    }
    return result
};