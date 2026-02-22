function binaryGap(n: number): number {
    let consecZeros = 0;
    let maxConsecZeros = -1;
    let foundFirstOnes = false;
    while(n > 0) {
        const cur = n & 1;
        if(foundFirstOnes) {
            if(cur == 1) {
                maxConsecZeros = Math.max(maxConsecZeros, consecZeros);
                consecZeros = 0;
            } else {
                consecZeros++;
            }
        } else {
            if(cur == 1) foundFirstOnes = true;
        }
        n >>= 1;
    }
    return maxConsecZeros + 1;
};