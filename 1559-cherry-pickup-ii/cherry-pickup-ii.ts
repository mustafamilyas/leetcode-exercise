function cherryPickup(grid: number[][]): number {
    const memo = new Map<string, number>()
    function move(row: number, pos1: number, pos2: number): number {
        if(row === grid.length) return 0;
        const key = `${row}:${pos1}:${pos2}`;
        if(memo.has(key)) return memo.get(key);
        let childCost = 0;
        for(let i = Math.max(0, pos1 - 1); i <= pos1 + 1 && i < grid[row].length; i++) {
            for(let k = Math.max(0, pos2 - 1); k <= pos2 + 1 && k < grid[row].length; k++) {
                if(i !== k) {
                    const localChildCost = move(row + 1, i, k);
                    childCost = Math.max(childCost, localChildCost)
                }
            }
        }
        const trueCost = grid[row][pos1] + grid[row][pos2] + childCost;
        memo.set(key, trueCost)
        return trueCost;
    }
    return move(0, 0, grid[0].length - 1)
};