function smallestNumber(n: number): number {
    return (1 << Math.ceil(Math.log2(n + 1))) - 1;
};