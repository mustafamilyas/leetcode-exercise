function findJudge(n: number, trust: number[][]): number {
    const sum = n * (n + 1) / 2
    const trustValues = new Array(n).fill(0);
    for(const [from, to] of trust) {
        trustValues[from - 1] -= to;
        trustValues[to - 1] += from;
    }
    for(let i = 0; i < n; i++) {
        if(trustValues[i] + i + 1 === sum) return i + 1
    }
    return -1
};