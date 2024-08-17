function projectionArea(grid: number[][]): number {
    let shadow = 0;
    let side = new Array(grid.length).fill(0);
    let front = new Array(grid.length).fill(0);
    for(let i = 0; i < grid.length; i++) {
        for(let k = 0; k < grid[i].length; k++) {
            if(grid[i][k] === 0) continue;
            shadow++
            side[i] = Math.max(side[i], grid[i][k])
            front[k] = Math.max(front[k], grid[i][k])
        }
    }
    return shadow + side.reduce((a,b)=>a+b, 0) + front.reduce((a,b)=>a+b, 0);
};