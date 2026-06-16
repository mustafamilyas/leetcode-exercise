function processStr(s: string): string {
    let res = '', i = 0;
    while(i < s.length) {
        if(s[i] == '*') {
            let removed = 1;
            while(i < s.length && s[++i] == '*') removed++
            res = res.slice(0, Math.max(0, res.length - removed))
        } else if(s[i] == '#') {
            res += res;
            i++
        } else if(s[i] == '%') {
            let reversed = true;
            while(i < s.length && s[++i] == '%') reversed = !reversed
            if(reversed) res = res.split("").reverse().join("")
        } else {
            res += s[i++];
        }
    }
    return res;
};