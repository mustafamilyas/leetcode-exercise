function numberOfSubstrings(s: string): number {
    let counter = [0, 0, 0];
    let res = 0, l = 0;
    for(let i = 0; i < s.length; i++) {
        let charcode = s.charCodeAt(i) - 97;
        counter[charcode]++
        while(counter.every(e => e > 0)) {
            res += s.length - i;
            let charcode = s.charCodeAt(l++) - 97;
            counter[charcode]--
        }
    }
    return res
};