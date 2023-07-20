function asteroidCollision(asteroids: number[]): number[] {
    const stack = [];

    for(const a of asteroids) {
        let top = stack[stack.length - 1]
        if(top > 0 && a < 0) {
            let isWinning = true;
            while(top > 0 && a < 0) {
                const diff = top + a;
                if(diff < 0) {
                    stack.pop();
                    top = stack[stack.length - 1] 
                } else if (diff === 0) {
                    stack.pop();
                    isWinning = false;
                    break;
                } else {
                    isWinning = false;
                    break;
                }
            }
            if(isWinning) {
                stack.push(a)
            }
        } else {
            stack.push(a)
        }
    }

    return stack
};