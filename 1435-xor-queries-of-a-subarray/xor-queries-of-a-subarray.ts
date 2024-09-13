function xorQueries(arr: number[], queries: number[][]): number[] {
    const xor = []
    let cur = 0;
    for(let i = 0; i < arr.length; i++) {
        xor.push(cur ^= arr[i])
    }
    return queries.map(([start, end])=>(xor[end]) ^ (xor[start - 1] ?? 0))
};