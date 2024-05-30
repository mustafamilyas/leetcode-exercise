function countTriplets(arr: number[]): number {
    const values = new Array(arr.length).fill(null).map(()=> new Array(arr.length).fill(0))
    for(let i = 0; i < arr.length; i++) {
        values[i][i] = arr[i]
        for(let k = i + 1; k < arr.length; k++) {
            values[i][k] = values[i][k - 1] ^ arr[k]
        }
    }
    let counter = 0;
    for(let i = 0; i < arr.length; i++) {
        for(let k = i; k < arr.length; k++) {
            for(let m = k + 1; m < arr.length; m++) {
                if(values[i][k] === values[k+1][m]) counter++
            }
        }
    }
    return counter;
};