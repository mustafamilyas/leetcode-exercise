const mod = 10 ** 9 + 7
function numWays(words: string[], target: string): number {
    const counter = [];
    const m = words.length;
    const n = words[0].length;
    for(let k = 0; k < n; k++) {
        const localCounter = new Array(26).fill(0);
        for(let i = 0; i < m; i++) {
            localCounter[words[i].charCodeAt(k) - 97]++
        }
        counter.push(localCounter)
    }

    let prev = new Array(counter.length).fill(0);
    let cur = new Array(counter.length).fill(0);

    for(let i = 0; i < target.length; i++) {
        let prevSum = prev?.[i - 1] ?? 0;
        for(let k = i; k <= n - target.length + i; k++) {
            const counterIdx = target.charCodeAt(i) - 97;
            if(counter[k][counterIdx] > 0) {
                if(prevSum) cur[k] = (prevSum * counter[k][counterIdx]) % mod
                else if(i === 0) cur[k] = counter[k][counterIdx] 
            }
            prevSum += prev[k]
        }
        prev = cur;
        cur = new Array(counter.length).fill(0)
    }
    return prev.reduce((a, b)=>(a + b) % mod, 0)
};


//   abc cba cbc aba
// a  1   1
// b      1   2 
// a          0   6