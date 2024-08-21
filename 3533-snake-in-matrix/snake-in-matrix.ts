function finalPositionOfSnake(n: number, commands: string[]): number {
    let x = 0, y = 0;
    for(const cmd of commands) {
        if (cmd === "RIGHT") x++ 
        if (cmd === "LEFT") x--
        if (cmd === "DOWN") y++
        if (cmd === "UP") y--
    }
    return y * n + x
};