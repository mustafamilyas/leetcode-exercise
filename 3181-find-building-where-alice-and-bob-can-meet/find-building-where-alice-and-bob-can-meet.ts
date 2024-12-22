function leftmostBuildingQueries(heights: number[], queries: number[][]): number[] {
    const leftmostHigh = Array.from(heights, () => -1)
    const results = Array.from(queries, () => -1)
    const stack = [heights.length - 1]
    for(let i = heights.length - 1; i >= 0; i--) {
        const cur = heights[i]
        while(stack.length && cur >= heights[stack[stack.length - 1]]) {
            stack.pop()
        }
        if(stack.length) {
            leftmostHigh[i] = stack[stack.length - 1]
        }
        stack.push(i)
    }
    const memo = new Map<string, number>();
    for(let i = 0; i < queries.length; i++) {
        queries[i].sort((a, b)=>a - b)
        let [x, y] = queries[i];
        if(x === y || heights[x] < heights[y]) {
            results[i] = y
            continue;
        }
        if(leftmostHigh[x] == -1 || leftmostHigh[y] == -1) continue;
        if(leftmostHigh[x] >= leftmostHigh[y]) {
            results[i] = leftmostHigh[x]
            continue;
        } 
        results[i] = getHigh(x, y)
    }
    return results;

    function getHigh(x: number, y: number) {
        if(leftmostHigh[y] < 0) return -1;
        if(heights[x] < heights[leftmostHigh[y]]) return leftmostHigh[y]
        const key = `${x}:${y}`;
        if(memo.has(key)) return memo.get(key);
        const value = getHigh(x, leftmostHigh[y]);
        memo.set(key, value)
        return value
    }
};