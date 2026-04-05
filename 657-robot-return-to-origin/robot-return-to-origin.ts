function judgeCircle(moves: string): boolean {
    let x = 0, y = 0;
    for(let i = 0; i < moves.length; i++) {
        if(moves[i] == 'U') y++
        else if(moves[i] == 'D') y--
        else if(moves[i] == 'L') x--
        else x++ 
    }
    return x == 0 && y == 0
};