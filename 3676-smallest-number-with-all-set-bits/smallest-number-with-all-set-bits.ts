function smallestNumber(n: number): number {
    const bit = n.toString(2).length;
    return parseInt('1'.repeat(bit), 2);
};