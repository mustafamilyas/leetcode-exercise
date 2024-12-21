function maxKDivisibleComponents(n: number, edges: number[][], values: number[], k: number): number {
    const adjacentArray = Array.from({length: n}, ()=>[]);
    let num = 0;
    for(const [from, to] of edges) {
        adjacentArray[from].push(to)
        adjacentArray[to].push(from)
    }
    addUp(-1, 0)
    return num;
    // ****************** UTILS ******************
    function addUp(parent: number, node: number): number {
        const adjacent = adjacentArray[node];
        let sum = values[node]
        for(const child of adjacent) {
            if(child === parent) continue;
            sum += addUp(node, child)
        }
        if(sum % k === 0) {
            num++
            return 0
        }
        return sum
    }
};