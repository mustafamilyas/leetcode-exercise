function countUnguarded(m: number, n: number, guards: number[][], walls: number[][]): number {
    let unGuarded = m * n - guards.length - walls.length;
    const visited = new Array(m).fill(0).map(()=>new Array(n).fill(0));

    function checkSurrounding(startRow: number, startCol: number) {
        for(let i = startRow - 1; i >= 0 && visited[i][startCol] !== -1; i--) {
            if(visited[i][startCol] === 0) unGuarded--;
            visited[i][startCol] = 1;
        }
        for(let i = startRow + 1; i < m && visited[i][startCol] !== -1; i++) {
            if(visited[i][startCol] === 0) unGuarded--;
            visited[i][startCol] = 1;
        }
        for(let i = startCol - 1; i >= 0 && visited[startRow][i] !== -1; i--) {
            if(visited[startRow][i] === 0) unGuarded--;
            visited[startRow][i] = 1;
        }
        for(let i = startCol + 1; i < n && visited[startRow][i] !== -1; i++) {
            if(visited[startRow][i] === 0) unGuarded--;
            visited[startRow][i] = 1;
        }
    }

    for(const [x, y] of walls) {
        visited[x][y] = -1;
    }
    for(const [x, y] of guards) {
        visited[x][y] = -1;
    }

    for(const [x, y] of guards) {
        checkSurrounding(x, y)
    }

    return unGuarded;
};