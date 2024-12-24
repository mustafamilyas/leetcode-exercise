/**
 Do not return anything, modify board in-place instead.
 */
const MOVEMENT = [[0,1],[0,-1],[1,0],[-1,0]]
function solve(board: string[][]): void {
    const m = board.length, n = board[0].length;
    const seen = Array.from({length: m}, ()=>Array.from({length: n}, ()=>false))

    for(let i = 0; i < m; i++) {
        for(let k = 0; k < n; k++) {
            if(seen[i][k]) continue
            if(board[i][k] === 'X') {
                seen[i][k] = true
                continue;
            }
            const test = isSurrounded(i, k);
            if(test) claim(i, k)
        }
    }

    function isSurrounded(sx: number, sy: number): boolean {
        if(board?.[sx]?.[sy] === undefined) return false
        if(board[sx][sy] === 'X') return true;
        seen[sx][sy] = true;
        let result = true;
        for(const [dx, dy] of MOVEMENT) {
            if(seen?.[sx + dx]?.[sy + dy]) continue;
            const local = isSurrounded(sx + dx, sy + dy);
            result &&= local
        }
        return result;
    }

    function claim(sx: number, sy: number): boolean {
        if(board?.[sx]?.[sy] === undefined || board[sx][sy] === 'X') return
        board[sx][sy] = 'X'
        for(const [dx, dy] of MOVEMENT) {
            claim(sx + dx, sy + dy)
        }
    }

};