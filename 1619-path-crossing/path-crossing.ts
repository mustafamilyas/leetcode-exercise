const move = {
    N: [0, -1],
    W: [-1, 0],
    S: [0, 1],
    E: [1, 0],
}
function isPathCrossing(path: string): boolean {
    const visited = new Set(['0:0']);
    const position = [0,0]
    for(const dir of path) {
        const curMove = move[dir];
        position[0] += curMove[0]
        position[1] += curMove[1]
        const key = position.join(':');
        if(visited.has(key)) return true;
        visited.add(key)
    }
    return false;
};