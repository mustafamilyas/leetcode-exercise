const MOVEMENT = [[-1, 0], [0, -1], [1, 0], [0, 1]];

function exist(board: string[][], word: string): boolean {
    function backtrack(set: Set<string>, wordI: number, x: number, y: number) {
        if(wordI === word.length) return true;
        if(board?.[x]?.[y] == null || board[x][y] !== word[wordI]) return false;
        const key = `${x}:${y}`;
        if(set.has(key)) return false;
        set.add(key)
        const res = MOVEMENT.some(([dx, dy])=>backtrack(set, wordI + 1, x + dx, y + dy))
        set.delete(key);
        return res;
    }

    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[i].length; j++) {
            if(backtrack(new Set<string>(), 0, i, j)) return true;
        }
    }
    return false;
};