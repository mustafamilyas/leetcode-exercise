function generateParenthesis(n: number): string[] {
    const result = []
    function recurse(combine: string, o: number, c: number){
        if(o === 0 && c === 0) {
            result.push(combine)
            return;
        }

        if(o === c) {
            return recurse(combine + '(', o - 1, c)
        }

        o > 0 && recurse(combine + '(', o - 1, c);
        c > 0 && recurse(combine + ')', o, c - 1);
    }
    recurse('', n, n)
    return result;
};