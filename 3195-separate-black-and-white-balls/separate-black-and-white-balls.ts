function minimumSteps(s: string): number {
    let counter1 = 0, movement = 0;
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '1') counter1++
        else movement += counter1
    }
    return movement;
};