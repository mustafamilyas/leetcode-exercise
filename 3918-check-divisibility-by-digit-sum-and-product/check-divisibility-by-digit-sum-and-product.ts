function checkDivisibility(n: number): boolean {
    let sum = 0, product = 1, _n = n;
    while(_n > 0) {
        const cur = _n % 10;
        _n = Math.trunc(_n / 10);
        sum += cur;
        product *= cur;
    }
    return n % (sum + product) == 0;
};