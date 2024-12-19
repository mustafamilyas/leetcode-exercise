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
    let chunk = 1, cur = window[0];
    for(let i = 1; i < window.length; i++) {
        const [s, e] = cur;
        const [ns, ne] = window[i]
        if(e > ns) {
            cur[1] = Math.max(e, ne)
        } else {
            chunk++
            cur = window[i]
        }
    } 
    return chunk;
};