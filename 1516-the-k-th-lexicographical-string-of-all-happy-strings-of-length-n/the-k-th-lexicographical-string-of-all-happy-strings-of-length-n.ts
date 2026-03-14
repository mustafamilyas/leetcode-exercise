function getHappyString(n: number, k: number): string {
    let total = 3;
    for(let i = 1; i < n; i++) {
        total *= 2;
    } 
    if(k > total) return "";
    let str = "";
    let div = total / 3;
    k--;
    while(str.length < n) {
        let idx = Math.floor(k / div);
        const prevCharCode = (str.charCodeAt(str.length - 1) || 99) - 97; 
        if(prevCharCode == 0 || (prevCharCode == 1 && idx == 1)) idx++ 
        str += String.fromCharCode(97 + idx);
        k %= div;
        div /= 2;
    }
    return str;
};