function isValidSudoku(board: string[][]): boolean {
    const squareSets = new Array(3)
        .fill(null)
        .map(()=> new Array(3)
            .fill(null)
            .map(()=>new Set<string>())
        )

    // check horizontal and vertical
    for(let i = 0; i < 9; i++) {
        const setHorizontal = new Set<string>();
        const setVertical = new Set<string>();
        for(let k = 0; k < 9; k++) {
            if(board[i][k] !== '.' && setHorizontal.has(board[i][k])) return false;
            if(board[k][i] !== '.' && setVertical.has(board[k][i])) return false;
            const squareSet = squareSets[Math.floor(i / 3)][Math.floor(k / 3)];
            if(board[i][k] !== '.' && squareSet.has(board[i][k])) return false;
            setHorizontal.add(board[i][k])
            setVertical.add(board[k][i])
            squareSet.add(board[i][k])
        }
    }
    return true;
};