const lookup = [[1,0],[-1,0],[0,1],[0,-1]];

function orangesRotting(grid: number[][]): number {
    const m = grid.length
    const n = grid[0].length;
    let stack = [], freshCounter = 0, minutes = 0;
    for(let i = 0; i < m; i++) {
        for(let k = 0; k < n; k++) {
            if(grid[i][k] === 1) {
                freshCounter++
            } else if(grid[i][k] === 2) {
                stack.push([i, k])
            }
        }
    }
    if(freshCounter === 0) return 0;

    while(stack.length) {
        minutes++
        const nextStack = [];
        do {
            const [cx, cy] = stack.pop();
            lookup.forEach(([dx, dy])=> {
                const rx = cx + dx;
                const ry = cy + dy;
                if(grid?.[rx]?.[ry] !== 1) return; 
                grid[rx][ry] = 2;
                nextStack.push([rx, ry]);
            })
        } while(stack.length);
        freshCounter -= nextStack.length;
        stack = nextStack;
    }
    return freshCounter === 0 ? minutes - 1: -1;
};