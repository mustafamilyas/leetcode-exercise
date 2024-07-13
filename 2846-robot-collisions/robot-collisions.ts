function survivedRobotsHealths(positions: number[], healths: number[], directions: string): number[] {
    const robots = positions.map((p, i)=>[p, i])
    robots.sort((a,b)=>a[0]-b[0])
    const stack = []
    for(let i = 0; i < robots.length; i++) {
        const robot = robots[i]
        const dir = directions[robot[1]]
        if(dir === 'R') stack.push(robot)
        else {
            while(stack.length && healths[robot[1]] > 0) {
                const endRobot = stack.pop();
                if(healths[endRobot[1]] > healths[robot[1]]) {
                    healths[endRobot[1]]--
                    healths[robot[1]] = 0;
                    stack.push(endRobot);
                } else if (healths[endRobot[1]] === healths[robot[1]]) {
                    healths[endRobot[1]] = 0;
                    healths[robot[1]] = 0;
                } else {
                    healths[endRobot[1]] = 0
                    healths[robot[1]]--
                }
            }
        }
    }
    return healths.filter((v)=>v)
};

