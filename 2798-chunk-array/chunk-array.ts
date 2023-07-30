function chunk(arr: any[], size: number): any[][] {
    const res = [];
    for(let i = 0; i < Math.ceil(arr.length / size); i++) {
        res.push(arr.slice(i * size, (i + 1) * size))
    }
    return res
};