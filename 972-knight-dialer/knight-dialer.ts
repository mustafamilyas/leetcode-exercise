const VALID_MOVES = [[4,6],[6,8],[7,9],[4,8],[0,3,9],[],[0,1,7],[2,6],[1,3],[2,4]];
const MOD = 10**9 + 7;
function knightDialer(n: number): number {
    if(n === 1) return 10;
    const memo = new Map();
    function move(n: number, remainingMoves: number) {
        if(remainingMoves === 0) return 1;
        const key = `${n}:${remainingMoves}`
        if(memo.has(key)) return memo.get(key)
        const possibleNextNumbers = VALID_MOVES[n];
        let combine = 0;
        for(const next of possibleNextNumbers) {
            combine += move(next, remainingMoves - 1) % MOD;
        }
        memo.set(key, combine)
        return combine % MOD;
    }

    let combine = 0;

    for(let i = 0; i <= 9; i++) {
        combine += move(i, n - 1) % MOD;
    }

    return combine % MOD;    
};

