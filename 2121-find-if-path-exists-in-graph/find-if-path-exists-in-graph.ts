function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
    const unionGroup = new UnionFind(n);
    for(const [from, to] of edges) {
        unionGroup.union(from, to)
    }
    return unionGroup.isConnected(source, destination)
};

class UnionFind {
    roots: Array<number>;
    constructor(n: number) {
        this.roots = []
        for(let i = 0; i < n; i++) {
            this.roots.push(i)
        }
    }

    public find(x: number) {
        if(this.roots[x] === x) return x;
        else return this.find(this.roots[x])
    }

    public union(x: number, y: number) {
        const rootX = this.find(x);
        const rootY = this.find(y);
        this.roots[rootX] = rootY;
    }

    public isConnected(x: number, y: number) {
        return this.find(x) === this.find(y); 
    }
}