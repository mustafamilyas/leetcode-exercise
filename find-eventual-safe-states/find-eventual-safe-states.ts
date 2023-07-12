function eventualSafeNodes(graph: number[][]): number[] {
    const pathFlags = new Array(graph.length)

    function recurse(visited: Set<number>, cur: number): boolean {
        const curNeighbor = graph[cur];
        if(curNeighbor.length === 0) return true;
        if(typeof pathFlags[cur] === 'boolean') return pathFlags[cur];

        let answer = true;
        for(const n of curNeighbor) {
            if(visited.has(n)) {
                answer = false;
                break;
            }
            visited.add(n);
            const localRes = recurse(visited, n);
            visited.delete(n);
            if(!localRes) {
                answer = false;
                break;
            } 
        }
        if(answer) {
            pathFlags[cur] = true;
        } else {
            // invalidate all of them
            for(const v of visited) {
                pathFlags[v] = false;
            }
        }
        return answer;
    }

    for(let i = 0; i < graph.length; i++) {
        pathFlags[i] = recurse(new Set([i]), i);
    }

    return pathFlags.map((_, idx)=>idx).filter((i)=>pathFlags[i])
};