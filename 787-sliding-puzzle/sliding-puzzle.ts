function slidingPuzzle(board: number[][]): number {
    const visited = new Set();
    let queue = [board.map((e)=>e.join('')).join('')];
    let move = 0;
    while(queue.length) {
        const nextBoard = [];
        for(const boardString of queue) {
            if(boardString === '123450') return move;
            if(visited.has(boardString)) continue;
            visited.add(boardString)
            const index = boardString.indexOf('0');
            if(index % 3 < 2) {
                // right
                nextBoard.push(boardString.slice(0, index) + boardString[index + 1] + boardString[index] + boardString.slice(index + 2))
            }
            if(index % 3 > 0) {
                nextBoard.push(boardString.slice(0, index - 1) + boardString[index] + boardString[index - 1] + boardString.slice(index + 1))
                // left
            }
            if(index > 2) {
                nextBoard.push(
                    boardString.slice(0, index - 3) + 
                    boardString[index] + 
                    boardString.slice(index - 2, index) + 
                    boardString[index - 3] + 
                    boardString.slice(index + 1)
                )
            } else {
                nextBoard.push(
                    boardString.slice(0, index) + 
                    boardString[index + 3] + 
                    boardString.slice(index + 1, index + 3) + 
                    boardString[index] + 
                    boardString.slice(index + 4)
                )
            }
        }
        move++
        queue = nextBoard
    }
    return -1;
};