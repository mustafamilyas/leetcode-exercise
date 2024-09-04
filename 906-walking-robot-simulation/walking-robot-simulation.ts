function robotSim(commands: number[], obstacles: number[][]): number {
    let x = 0, y = 0, curMove = 0, furthest = 0;
    const movements = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    const obs = new Set<string>();
    for(const [ox, oy] of obstacles) {
        obs.add(ox + ':' + oy)
    }
    for(const command of commands) {
        if(command === -1) {
            if(curMove === 3) curMove = 0
            else curMove++
        } else if (command === -2) {
            if(curMove === 0) curMove = 3
            else curMove--
        } else {
            for(let i = 1; i <= command; i++) {
                const nx = x + movements[curMove][0]
                const ny = y + movements[curMove][1]
                if(obs.has(`${nx}:${ny}`)) break;
                x = nx, y = ny
            }
            furthest = Math.max(furthest, x * x + y * y)
        }
    }
    return furthest
};