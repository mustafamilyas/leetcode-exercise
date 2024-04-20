const MOVEMENTS = [[0,1],[0,-1],[1,0],[-1,0]]
function findFarmland(land: number[][]): number[][] {
    const result = []
    for(let i = 0; i < land.length; i++) {
        for(let j = 0; j < land[i].length; j++) {
            if(land[i][j] === 1) result.push(getCoordinate(i, j))
        }
    }
    return result;

    function getCoordinate(x: number, y: number) {
        const bottomRight = [x, y];
        const stack = [[x, y]];
        while(stack.length) {
            const [curx, cury] = stack.pop();
            if(land?.[curx]?.[cury] !== 1) continue;
            land[curx][cury] = -1;
            bottomRight[0] = Math.max(bottomRight[0], curx)
            bottomRight[1] = Math.max(bottomRight[1], cury)
            for(const [dx, dy] of MOVEMENTS) {
                if(land?.[curx + dx]?.[cury + dy] === 1) stack.push([curx + dx, cury + dy]) 
            }
        }
        return [x, y, ...bottomRight]
    }
};