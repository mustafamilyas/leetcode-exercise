function isValidSudoku(board: string[][]): boolean {
    function checkSquare(startRow: number, startCol: number) {
        const set = new Set<string>();
        for(let i = 0; i < 3; i++) {
            for(let k = 0; k < 3; k++) {
                if(board[startRow + i][startCol + k] === '.') continue;
                if(set.has(board[startRow + i][startCol + k])) return false;
                set.add(board[startRow + i][startCol + k])
            }
        }
        return true;
    }

    // check horizontal and vertical
    for(let i = 0; i < 9; i++) {
        const setHorizontal = new Set<string>();
        const setVertical = new Set<string>();
        for(let k = 0; k < 9; k++) {
            if(board[i][k] !== '.' && setHorizontal.has(board[i][k])) return false;
            if(board[k][i] !== '.' && setVertical.has(board[k][i])) return false;
            setHorizontal.add(board[i][k])
            setVertical.add(board[k][i])
        }
    }

    // check square
    for(let i = 0; i < 9; i += 3) {
       for(let k = 0; k < 9; k += 3) {
           if(!checkSquare(i, k)) return false;
       }
    }
    return true;
};