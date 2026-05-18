function minJumps(arr: number[]): number {
    const jumpMap = new Map<number, number[]>();
    const res = new Array(arr.length).fill(Number.MAX_SAFE_INTEGER);
    res[0] = 0;
    for(let i = 0; i < arr.length; i++) {
        if (!jumpMap.has(arr[i])) jumpMap.set(arr[i], []);
        jumpMap.get(arr[i])!.push(i);
    }
    let queue = [0];
    while(queue.length) {
        const nextSet = new Set<number>();
        for(const idx of queue) {
            const curJump = res[idx];
            const portal = jumpMap.get(arr[idx]) ?? [];
            if(idx > 0 && res[idx - 1] > curJump + 1) {
                res[idx - 1] = curJump + 1;
                nextSet.add(idx - 1)
            }
            if(idx < arr.length - 1 && res[idx + 1] > curJump + 1) {
                res[idx + 1] = curJump + 1;
                nextSet.add(idx + 1)
            }
            for(const nextIdx of portal) {
                if(nextIdx !== idx && res[nextIdx] > curJump + 1) {
                    res[nextIdx] = curJump + 1;
                    nextSet.add(nextIdx)
                }
            }

            jumpMap.delete(arr[idx]);
        }
        queue = Array.from(nextSet);
    }
    return res[arr.length - 1]
};