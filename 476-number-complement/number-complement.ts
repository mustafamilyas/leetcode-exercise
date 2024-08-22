function findComplement(num: number): number {
    if(num === 1) return 0;
    const bitSize = Math.floor(Math.log2(num)) + 1
    const allOnes = 2 ** bitSize - 1;
    return num ^ allOnes
};