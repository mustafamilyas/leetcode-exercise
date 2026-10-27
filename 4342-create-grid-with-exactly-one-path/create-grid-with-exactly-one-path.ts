function createGrid(m: number, n: number): string[] {
    const res: string[] = [];
    for(let i = 0; i < m; i++) {
        let entry = ''
        for(let k = 0; k < n; k++) {
            if(i == 0 || k == n - 1) entry += '.'
            else entry += '#'
        }
        res.push(entry)
    }
    return res;
};

/*
.

..
x.

....

...x
xx..

....x
xxx..

..xx
x..x
xx..

..x
x..
xx.

..xx
x..x
xx..
xxx.
*/