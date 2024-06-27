function findCenter(edges: number[][]): number {
    const map = new Map<number, Set<number>>();
    for(const [from, to] of edges) {
        let fromSet = map.get(from)
        if(!fromSet) map.set(from, fromSet = new Set())
        fromSet.add(to)
        let toSet = map.get(to)
        if(!toSet) map.set(to, toSet = new Set())
        toSet.add(from)
    }
    const mapSize = map.size
    for(const [key, values] of map.entries()) {
        if(values.size  === mapSize - 1) return key;
    }
    return -1
};