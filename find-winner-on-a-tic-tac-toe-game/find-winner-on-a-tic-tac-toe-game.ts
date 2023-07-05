function tictactoe(moves: number[][]): string {
    let winner = -1;
    const boards = new Array(3).fill(0).map(()=>new Array(3).fill(0))
    for(let i = 0; i < moves.length; i++) {
        const [x, y] = moves[i]
        if(i % 2) {
            boards[x][y] = 2
        } else {
            boards[x][y] = 1
        }
    }
    let counter = 0;
    // horizontal
    for(let i = 0; i < 3; i++) {
        if(!boards[i][0]) continue;
        counter = 1
        for(let k = 1; k < 3; k++) {
            if(boards[i][0] !== boards[i][k]) break;
            counter++
        }
        if(counter === 3) return boards[i][0] === 1 ? 'A' : 'B'
    }
    // vertical
    for(let i = 0; i < 3; i++) {
        if(!boards[0][i]) continue;
        counter = 1
        for(let k = 1; k < 3; k++) {
            if(boards[0][i] !== boards[k][i]) break;
            counter++
        }
        if(counter === 3) return boards[0][i] === 1 ? 'A' : 'B'
    }
    // diagonal top left to bottom right
    if(boards[0][0]) {
        counter = 1;
        for(let i = 1; i < 3; i++) {
            if(boards[0][0] !== boards[i][i]) break;
            counter++
        }
        console.log(boards[0][0], counter)
        if(counter === 3) return boards[0][0] === 1 ? 'A' : 'B'
    }
    // diagonal top right to bottom left
    if(boards[0][2]) {
        counter = 1;
        for(let i = 1; i < 3; i++) {
            if(boards[0][2] !== boards[0 + i][2 - i]) break;
            counter++
        }
        console.log(boards[0][2], counter)
        if(counter === 3) return boards[0][2] === 1 ? 'A' : 'B'
    }
    if(moves.length < 9) return 'Pending'
    return 'Draw';
};
