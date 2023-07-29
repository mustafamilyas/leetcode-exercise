function soupServings(n: number): number {
    if(n > 5000) return 1;
    const memo = {}
    function recurse(a: number, b: number, action: number): number {
        const key = a + ':' + b + ':' + action;
        if(typeof memo[key] === 'number') return memo[key]
        switch(action) {
            case 1:
                a -= 100;
                break;
            case 2:
                a -= 75;
                b -= 25;
                break;
            case 3:
                a -= 50;
                b -= 50;
                break;
            case 4:
                a -= 25;
                b -= 75;
                break;
        }
        if(a <= 0 && b <= 0) return 0.5;
        if(a <= 0) return 1;
        if(b <= 0) return 0;
        const action1 = recurse(a, b, 1)
        const action2 = recurse(a, b, 2)
        const action3 = recurse(a, b, 3)
        const action4 = recurse(a, b, 4)
        memo[key] =  0.25 * (action1 + action2 + action3 + action4)
        return memo[key]
    }
    return recurse(n, n, -1)
};