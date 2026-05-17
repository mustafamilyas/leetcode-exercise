function canReach(arr: number[], start: number): boolean {
    const memo = new Array(arr.length);
    return recurse(start, new Set())
    function recurse(idx: number, visited: Set<number>) {
        if(idx < 0 || idx >= arr.length) return false;
        if(arr[idx] == 0) return true;
        if(typeof memo[idx] == 'number') return memo[idx]
        if(visited.has(idx)) return false;
        visited.add(idx);
        const able = recurse(idx + arr[idx], visited) || recurse(idx - arr[idx], visited)   
        visited.delete(idx);
        memo[idx] = able;
        return able;
    }
};