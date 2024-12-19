function maxChunksToSorted(arr: number[]): number {
    const visited = new Array(arr.length).fill(false);
    const window = []
    for(let i = 0; i < arr.length; i++) {
        if(visited[i]) continue;
        let cur = arr[i], s = arr[i], e = arr[i]
        while(!visited[cur]) {
            visited[cur] = true;
            cur = arr[cur]
            s = Math.min(s, cur);
            e = Math.max(e, cur)
        }
        window.push([s, e])
    }
    let chunk = 1, e = window[0][1]
    for(let i = 1; i < window.length; i++) {
        const [ns, ne] = window[i]
        if(e > ns) {
            e = Math.max(e, ne)
        } else {
            chunk++
            e = ne
        }
    } 
    return chunk;
};