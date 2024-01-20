const MOD = 10 ** 9 + 7;
function sumSubarrayMins(arr: number[]): number {
    const stack = [];
    let sumOfMinimums = 0;

    for (let i = 0; i <= arr.length; i++) {
        while (stack.length && (i === arr.length || arr[stack[stack.length - 1]] >= arr[i])) {
            const mid = stack.pop();
            const leftBoundary = stack.length === 0 ? -1 : stack[stack.length - 1];
            const rightBoundary = i;

            const count = (mid - leftBoundary) * (rightBoundary - mid) % MOD;

            sumOfMinimums += (count * arr[mid]) % MOD;
            sumOfMinimums %= MOD;
        }
        stack.push(i);
    }

    return sumOfMinimums;
};