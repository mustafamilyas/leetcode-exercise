const MOVEMENT = [[0, 1],[0, -1],[1, 0],[-1, 0]];
const MOD = 10 ** 9 + 7

function findPaths(m: number, n: number, maxMove: number, startRow: number, startColumn: number): number {
    const memo = new Map<string, number>();
    function recursive(x: number, y: number, remainingMove: number): number {
        if(remainingMove === 0) return 0;
        const key = `${x}:${y}:${remainingMove}`;
        if(memo.has(key)) return memo.get(key);
        let result = 0;
        for(const [dx, dy] of MOVEMENT) {
            const nx = dx + x, ny = dy + y;
            result = (result + (isOutOfBoundary(nx, ny) ? 1 : recursive(nx, ny, remainingMove - 1))) % MOD;
        }
        memo.set(key, result)
        return result;
    }

    function isOutOfBoundary(x: number, y: number) {
        return x < 0 || x >= m || y < 0 || y >= n
    }
    return recursive(startRow, startColumn, maxMove)
};