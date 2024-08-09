const SQ_LENGTH = 3;
const MAGIC_SUM = 15;
function numMagicSquaresInside(grid: number[][]): number {
    let result = 0;
    let rowSum = new Array(SQ_LENGTH).fill(0)
    let colSum = new Array(SQ_LENGTH).fill(0)
    let set = new Array(16).fill(0)
    const rLength = grid.length, cLength = grid[0].length;
    for(let i = 0; i < SQ_LENGTH; i++) {
        for(let k = 0; k < SQ_LENGTH; k++) {
            rowSum[i] += grid?.[i]?.[k] ?? 0
            colSum[k] += grid?.[i]?.[k] ?? 0
            set[grid?.[i]?.[k] ?? 0]++;
        }
    }
    for(let i = 0; i <= rLength - SQ_LENGTH; i++) {
        const curRowSum = [...rowSum];
        const curColSum = [...colSum];
        const curSet = [...set]
        for(let k = 0; k <= cLength - SQ_LENGTH; k++) {
            const isMagicDia = grid?.[i]?.[k] + grid?.[i + 1]?.[k + 1] + grid?.[i + 2]?.[k + 2] === MAGIC_SUM &&
                grid?.[i + 2]?.[k] + grid?.[i + 1]?.[k + 1] + grid?.[i]?.[k + 2] === MAGIC_SUM
            const isMagicRow = curRowSum.every((n)=> n === MAGIC_SUM);
            const isMagicCol = curColSum.every((n)=> n === MAGIC_SUM);
            const isUnique = curSet.slice(1, 10).every(n=>n === 1)
            if(isMagicDia && isMagicRow && isMagicCol && isUnique) {
                result++
            }
            if(k + SQ_LENGTH < cLength) {
                curColSum.push(0)
                for(let r = 0; r < SQ_LENGTH; r++) {
                    curSet[(grid?.[i + r]?.[k] ?? 0)]--;
                    curRowSum[r] += (grid?.[i + r]?.[k + SQ_LENGTH] ?? 0) - (grid?.[i + r]?.[k] ?? 0);
                    curColSum[SQ_LENGTH] += grid?.[i + r]?.[k + SQ_LENGTH] ?? 0
                    curSet[(grid?.[i + r]?.[k + SQ_LENGTH] ?? 0)]++;
                }
                curColSum.shift()
            }
        }
        rowSum.push(0)
        for(let r = 0; r < SQ_LENGTH; r++) {
            set[(grid?.[i]?.[r] ?? 0)]--;
            colSum[r] += (grid?.[i + SQ_LENGTH]?.[r] ?? 0) - (grid?.[i]?.[r] ?? 0);
            set[(grid?.[i + SQ_LENGTH]?.[r] ?? 0)]++;
            rowSum[SQ_LENGTH] += (grid?.[i + SQ_LENGTH]?.[r] ?? 0)
        }
        rowSum.shift();
    }
    return result;
};