function gcdOfStrings(str1: string, str2: string): string {
    let long = str1, short = str2;
    if(str1.length < str2.length) {
        long = str2;
        short = str1;
    }
    for(let i = short.length; i > 0; i--) {
        if(long.length % i || short.length % i) continue;
        const longMply = long.length / i;
        const shortMply = short.length / i;
        const x = short.slice(0, i);
        if(x.repeat(longMply) === long && short === x.repeat(shortMply)) return x
    }
    return ''
};