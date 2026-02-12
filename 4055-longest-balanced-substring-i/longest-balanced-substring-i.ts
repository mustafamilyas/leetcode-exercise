function longestBalanced(s: string): number {
    const n = s.length;
    let res = 0;
    for(let i = 0; i < n; i++) {
        const counter = new Array(26).fill(0);
        const unique = new Set();
        let maxFreq = 0;
        for(let k = i; k < n; k++) {
            const idx = s.charCodeAt(k) - 97;
            unique.add(idx);
            maxFreq = Math.max(maxFreq, ++counter[idx]);
            if(k - i + 1 == maxFreq * unique.size) res = Math.max(res, k - i + 1);
        }
    }

    return res;
};

/*
a [1]
b [1,1]
b [1,2]
a [2,2]
c [2,2,1]

a [2,2,1]
b [1,2,1]
b [1,1,1]
a [1,0,1]
c [0,0,1]

z [z 1]
z [z 2, a 1,]
a [z 2, a 1,]
b [z 2, a 1, b 1]
c [z 2, a 1, b 1, c 1]
c [z 2, a 1, b 1, c 2]
y [z 2, a 1, b 1, c 2, y 1]
*/