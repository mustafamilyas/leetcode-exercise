// function canBeEqual(s1: string, s2: string): boolean {
//     const diff = 2;
//     const counter = Array.from({ length: diff }, () => new Array(26).fill(0));
//     for(let i = 0; i < s1.length; i++) {
//         const y = s1.charCodeAt(i) - 97;
//         const x = i % diff;
//         counter[x][y]++;
//     }
//     for(let i = 0; i < s2.length; i++) {
//         const y = s2.charCodeAt(i) - 97;
//         const x = i % diff;
//         if(counter[x][y] == 0) return false;
//         counter[x][y]--;
//     }
//     return true;
// };

function canBeEqual(s1: string, s2: string): boolean {
    const evenIdx = (s1[0] == s2[0] && s1[2] == s2[2]) || (s1[0] == s2[2] && s1[2] == s2[0])
    const oddIdx = (s1[1] == s2[1] && s1[3] == s2[3]) || (s1[1] == s2[3] && s1[3] == s2[1])
    return !!evenIdx && !!oddIdx;
};