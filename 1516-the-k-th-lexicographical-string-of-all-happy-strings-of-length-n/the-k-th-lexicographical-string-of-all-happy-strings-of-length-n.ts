function getHappyString(n: number, k: number): string {
    const char = ['a', 'b', 'c'];
    let totalCombination = 3 * 2 ** (n - 1);
    if(k > totalCombination) return '';
    k--;
    let prev = -1, res = '';
    for(let i = 0; i < n; i++) {
        let idx = -1;
        if(i == 0) {
            totalCombination /= 3;
            idx = Math.floor(k / totalCombination);
            res += char[idx];
            k %= totalCombination;
        } else {
            totalCombination /= 2;
            idx = resolveIdx(Math.floor(k / totalCombination), prev);
            res += char[idx];
            k %= totalCombination;
        }
        prev = idx;
    }
    return res;
};

function resolveIdx(cur: number, prev: number): number {
    if(prev == 0) return cur + 1;
    if(prev == 1) return cur === 0 ? cur : 2;
    return cur;
}