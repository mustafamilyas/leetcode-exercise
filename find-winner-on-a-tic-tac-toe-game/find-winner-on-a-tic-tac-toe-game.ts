function tictactoe(moves: number[][]): string {
    let turn = 1;
    const boards = [[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]]
    for(const [row, col] of moves) {
        const player = turn % 2;
        boards[row][col] = player;
        const validRow = boards[row][0] === boards[row][1] && boards[row][1] === boards[row][2]  
        const validCol = boards[0][col] === boards[1][col] && boards[1][col] === boards[2][col]  
        const validD1 = boards[0][0] !== -1 && boards[0][0] === boards[1][1] && boards[1][1] === boards[2][2]
        const validD2 = boards[0][2] !== -1 && boards[0][2] === boards[1][1] && boards[1][1] === boards[2][0]
        if(validRow || validCol || validD1 || validD2) return player === 1 ? 'A': 'B'
        turn++;
    }
    return moves.length < 9 ? 'Pending' : 'Draw'
};
