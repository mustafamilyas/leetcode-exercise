function kthDistinct(arr: string[], k: number): string {
    const counter = arr.reduce((acc, cur)=> {
        acc[cur] = (acc[cur] ?? 0) + 1;
        return acc
    }, {})
    return Object.keys(counter).filter(key=>counter[key] === 1)[k - 1] ?? ''
};