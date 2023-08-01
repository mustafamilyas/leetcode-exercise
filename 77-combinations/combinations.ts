function combine(n: number, k: number): number[][] {
    const result = []
    function recurse(combination: number[], next: number) {
        if(combination.length === k) {
            result.push([...combination])
            return;
        }
        if(next > n) return;

        for(let i = next; i <= n; i++) {
            combination.push(i)
            recurse(combination, i + 1);
            combination.pop();
        }
    }

    recurse([], 1);

    return result;
};