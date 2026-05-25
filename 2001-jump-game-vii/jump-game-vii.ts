function canReach(s: string, minJump: number, maxJump: number): boolean {
    const reachable = new Array(s.length).fill(0);
    const ones = new Array(s.length).fill(0);
    reachable[0] = 1;
    for(let i = 0; i < minJump; i++) {
        ones[i] = 1;
    }
    for(let i = 1; i < s.length; i++) {
        if(s[i] == '0') {
            const start = i - maxJump - 1;
            const end = i - minJump;
            const reachableFromStart = start >= 0 ? ones[start] : 0;
            const reachableFromEnd = end >= 0 ? ones[end] : 0;
            reachable[i] = reachableFromEnd - reachableFromStart > 0 ? 1 : 0; 
        }
        ones[i] = ones[i - 1] + reachable[i] 
    }
    console.log(reachable, ones)
    return reachable[s.length - 1] == 1
};

/*
0000000000
0 1 2 3 4 5 6 7 8 9
1 0 1 1 1 1 1 1 1 1

0111100000
0 1 2 3 4 5 6 7 8 9
1 0 0 0 0 1 0 1 1 1

*/
