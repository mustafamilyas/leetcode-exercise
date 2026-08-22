const move = [[1, 0], [0, 1], [-1, 0], [0, -1]]
function rotateGrid(grid: number[][], k: number): number[][] {
    const m = grid.length;
    const n = grid[0].length;
    const squareNum = Math.min(m, n) / 2;
    const res = Array.from({ length: m }, () => new Array(n).fill(0))
    
    for(let i = 0; i < squareNum; i++) {
        const pos = [];
        let x = i, y = i;
        for(let j = 0; j < move.length; j++) {
            const [dx, dy] = move[j];
            const lim = j % 2 == 0 ? m - 1 - i * 2 : n - 1 - i * 2;
            for(let l = 0; l < lim; l++) {
                x += dx;
                y += dy;
                pos.push([x, y]);
            }
        }
        for(let j = 0; j < pos.length; j++) {
            const [ax, ay] = pos[j]
            const [bx, by] = pos[(j + k) % pos.length];
            res[bx][by] = grid[ax][ay];
        }
    }
    return res
};


/*
0,0 1,0 2,0 3,0 4,0 5,0 5,1 5,2 5,3 4,3

*/