function minScore(n: number, roads: number[][]): number {
    const map = {};
    for(const [from, to, weight] of roads) {
        if(map[from]) map[from].push([to, weight])
        else map[from] = [[to, weight]]

        if(map[to]) map[to].push([from, weight])
        else map[to] = [[from, weight]]
    }

    let min = Number.MAX_SAFE_INTEGER;
    const stack = [1];
    const seen = new Set<number>();
    while(stack.length) {
        const current = stack.pop();
        const child = map[current]
        seen.add(current)
        for(const [nextNode, weight] of child) {
            min = Math.min(min, weight);
            if(seen.has(nextNode)) continue
            stack.push(nextNode);
        }
    }

    return min;
};