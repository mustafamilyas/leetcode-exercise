function chalkReplacer(chalk: number[], k: number): number {
    const lap = chalk.reduce((a,b)=>a+b, 0);
    const normalized = k % lap;
    let cur = 0;
    for(let i = 0; i < chalk.length; i++) {
        cur += chalk[i];
        if(cur > normalized) return i
    }
    return 0
};