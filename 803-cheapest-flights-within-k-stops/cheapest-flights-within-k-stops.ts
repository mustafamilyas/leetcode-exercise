function findCheapestPrice(n: number, flights: number[][], src: number, dst: number, k: number): number {
    let distance = new Array(n).fill(Infinity);
    distance[src] = 0;
    for(let i = 0; i <= k; i++) {
        const local = [...distance];
        for(const [from, to, price] of flights) {
            local[to] = Math.min(local[to], distance[from] + price)
        }
        distance = local;
    }
    return 1 / distance[dst] === 0 ? -1 : distance[dst]
};