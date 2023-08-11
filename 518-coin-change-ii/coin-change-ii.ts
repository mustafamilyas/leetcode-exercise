function change(amount: number, coins: number[]): number {
    const memo = new Array(amount + 1).fill(0);
    memo[0] = 1
    for(const coin of coins) {
        for(let target = coin; target <= amount; target++) {
            memo[target] += (memo[target - coin] ?? 0)
        }
    }

    return memo[amount];
};