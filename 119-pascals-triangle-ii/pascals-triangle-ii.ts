function getRow(rowIndex: number): number[] {
    let cur = [1]
    for(let i = 0; i < rowIndex; i++) {
        const result = [];
        for(let i = 0; i <= cur.length; i++) {
            result.push((cur?.[i - 1] ?? 0) + (cur?.[i] ?? 0))
        }
        cur = result;
    }
    return cur
};