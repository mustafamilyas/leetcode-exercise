function integerBreak(n: number): number {
    if(n <= 3) return Math.ceil(n / 2);
    const n3 = Math.floor(n / 3);
    if(n % 3 === 1) return (3 ** (n3 - 1)) * 4 // substract from the divider, we don't want to multiply with 1
    if(n % 3 === 2) return (3 ** n3) * 2
    return 3 ** n3
};