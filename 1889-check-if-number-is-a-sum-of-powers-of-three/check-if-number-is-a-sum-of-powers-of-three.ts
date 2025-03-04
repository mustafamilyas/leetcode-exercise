function checkPowersOfThree(n: number): boolean {
    const maxPower = Math.floor(Math.log(n) / Math.log(3));
    return recurse(n, maxPower)
    function recurse(remaining: number, max: number) {
        if(remaining === 0) return true;
        if(max < 0) return false;
        for(let i = max; i >= 0; i--) {
            const next = remaining - 3 ** i;
            if(recurse(next, i - 1)) return true;
        }
        return false;
    }
};