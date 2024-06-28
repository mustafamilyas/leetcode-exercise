function maximumImportance(n: number, roads: number[][]): number {
    const map = new Map<number, number>();
    for(const [from, to] of roads) {
        map.set(from, (map.get(from) ?? 0) + 1)
        map.set(to, (map.get(to) ?? 0) + 1)
    }
    const city = Array.from(map.entries()).sort((a, b)=>a[1] - b[1])
    const cityImportance = new Array(city.length)
    for(let i = 0; i < city.length; i++) {
        cityImportance[city[i][0]] = i + 1 + (n - city.length)
    }
    let sum = 0;
    for(const [from, to] of roads) {
        sum += cityImportance[from] + cityImportance[to]
    }
    return sum;
};