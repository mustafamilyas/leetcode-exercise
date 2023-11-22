function findDiagonalOrder(nums: number[][]): number[] {
    const result = []
    const queue = [[0,0]]
    const visited = new Set();
    while(queue.length) {
        const [i, k] = queue.shift();
        const key = `${i}:${k}`
        if(visited.has(key)) continue;
        visited.add(key)
        result.push(nums[i][k])
        if(nums?.[i + 1]?.[k] !== undefined && !visited.has(`${i + 1}:${k}`)) queue.push([i + 1, k])
        if(nums?.[i]?.[k + 1] !== undefined && !visited.has(`${i}:${k + 1}`)) queue.push([i, k + 1])
    }
    return result;
};