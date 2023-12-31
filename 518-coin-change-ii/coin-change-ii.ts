function change(amount: number, coins: number[]): number {
    const memo = new Array(amount + 1).fill(0);
    // the purpose of this, is to increment value, where remaining equal to zero
    memo[0] = 1
    
    for(const coin of coins) {
        for(let target = coin; target <= amount; target++) {
            memo[target] += (memo[target - coin] ?? 0)
        }
    }

    return memo[amount];
};