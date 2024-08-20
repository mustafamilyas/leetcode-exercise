/**
 Do not return anything, modify board in-place instead.
 */
const NEIGHBOR = [[-1,-1],[0,-1],[1,-1],
                  [-1, 0],       [1, 0],
                  [-1, 1],[0, 1],[1, 1]]

function gameOfLife(board: number[][]): void {
    const m = board.length, n = board[0].length;
    const prevState = [...board.map((row)=>[...row])]

    for(let i = 0; i < m; i++) {
        for(let k = 0; k < n; k++) {
            const livingCounter = countLiving(i, k);
            if(prevState[i][k] === 0) {
                if(livingCounter === 3) board[i][k] = 1;
            } else if (prevState[i][k] === 1) {
                if(livingCounter > 3 || livingCounter < 2) board[i][k] = 0
            }
        }
    }


    function countLiving(x: number, y: number): number {
        let living = 0;
        for(const [dx, dy] of NEIGHBOR) {
            if(prevState?.[x + dx]?.[y + dy] === 1) living++
        }
        return living
    }
};