/**
 Do not return anything, modify board in-place instead.
 */
function solveSudoku(board: string[][]): void {
    const rowSet = new Array(9).fill(null).map(()=>new Set<string>());
    const colSet = new Array(9).fill(null).map(()=>new Set<string>());
    const boxSet = new Array(9).fill(null).map(()=>new Set<string>());
    for(let i = 0; i < 9; i++) {
        for(let k = 0; k < 9; k++) {
            if(board[i][k] === '.') continue;
            rowSet[i].add(board[i][k])
            colSet[k].add(board[i][k])
            boxSet[getBoxIndex(i, k)].add(board[i][k])
        }
    }
    backtrack(0, 0);

    return;

    function backtrack(x: number, y: number): boolean {
        if(x === 9) return true;
        const [nx, ny] = nextIndex(x, y);
        if(board[x][y] !== '.') return backtrack(nx, ny)
        for(let i = 1; i <= 9; i++) {
            const nextValue = i + ''
            if(isValidValue(x, y, nextValue)) {
                addValue(x, y, nextValue)
                if(backtrack(nx, ny)) return true;
                removeValue(x, y, nextValue)
            }
        }
        return false;
    }

    function nextIndex(x: number, y: number) {
        if(y < 8) return [x, y + 1]
        return [x + 1, 0]
    }

    function getBoxIndex(x: number, y: number) {
        if(x < 3) {
            if(y < 3) return 0
            if(y < 6) return 1
            return 2
        } else if(x < 6) {
            if(y < 3) return 3
            if(y < 6) return 4
            return 5
        } else {
            if(y < 3) return 6
            if(y < 6) return 7
            return 8
        }
    }

    function isValidValue(x: number, y: number, value: string) {
        return !rowSet[x].has(value) && !colSet[y].has(value) && !boxSet[getBoxIndex(x, y)].has(value)
    }

    function addValue(x: number, y: number, value: string) {
        rowSet[x].add(value)
        colSet[y].add(value)
        boxSet[getBoxIndex(x, y)].add(value)
        board[x][y] = value;
    }

    function removeValue(x: number, y: number, value: string) {
        rowSet[x].delete(value)
        colSet[y].delete(value)
        boxSet[getBoxIndex(x, y)].delete(value)
        board[x][y] = '.';
    }
};