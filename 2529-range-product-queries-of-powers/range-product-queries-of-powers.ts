const mod = 10 ** 9 + 7
function productQueries(n: number, queries: number[][]): number[] {
    const n_str = n.toString(2);
    const n_arr = [];
    for(let i = n_str.length - 1; i >= 0; i--) {
        if(n_str[i] == '1') n_arr.push(2 ** (n_str.length - i - 1))
    }
    const n_left = []
    for(let i = 0; i < n_arr.length; i++) {
        n_left.push(n_arr[i] * (n_left[i - 1] ?? 1))
    }
    return queries.reduce((acc, cur)=>{
        acc.push(((n_left[cur[1]] / (n_left[cur[0] - 1] ?? 1))) % mod)
        return acc
    }, [])
};