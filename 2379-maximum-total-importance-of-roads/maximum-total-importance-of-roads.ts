function maximumImportance(n: number, roads: number[][]): number {
    const counter = new Array(n).fill(0);
    let sum = 0;
    for(const [from, to] of roads) {
        counter[from]++
        counter[to]++
    }
    counter.sort((a,b)=>b-a);
    for(let i = 0; i < n && counter[i] > 0; i++) {
        sum += counter[i] * (n - i)
    }
    return sum;
};