function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
    const adjacentArray = new Array(n);
    populateAdjacentArray();
    const stack = [source];
    const seen = new Set<number>();
    while(stack.length) {
        const curNode = stack.pop();
        if(seen.has(curNode)) continue;
        if(curNode === destination) return true;
        seen.add(curNode)
        const next = adjacentArray[curNode] ?? [];
        stack.push(...next);
    }
    return false;
    /************* UTILS *************/
    function populateAdjacentArray() {
        for(const [from, to] of edges) {
            if(adjacentArray[from]) adjacentArray[from].push(to)
            else adjacentArray[from] = [to]
            if(adjacentArray[to]) adjacentArray[to].push(from)
            else adjacentArray[to] = [from]
        }
    }
};