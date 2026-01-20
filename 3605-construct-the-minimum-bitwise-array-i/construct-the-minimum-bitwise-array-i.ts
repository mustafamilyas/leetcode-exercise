function minBitwiseArray(nums: number[]): number[] {
    return nums.map((n)=>{
        let ans = -1;
        let next = 1;
        while((n & next) != 0) {
            ans = n - next;
            next <<= 1;
        }
        return ans;
    })
};

/*
1 1 0
10 2 -1
11 3 1
101 5 4
111 7 3
1011 11 (1001 9 | 1010 10) 9
1101 13 (1100 12 | 1101 13) 12
10001 17 (0111 7 | 1000 8) 7
11111 
*/