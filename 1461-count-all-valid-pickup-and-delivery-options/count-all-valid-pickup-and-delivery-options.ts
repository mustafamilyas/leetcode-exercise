const MOD = 10 ** 9 + 7
function countOrders(n: number): number {
    let count = 1;
    for(let i = 2; i <= n; i++) {
        count = (count * (2 *  i - 1) * i) % MOD;
    }
    return count;
};