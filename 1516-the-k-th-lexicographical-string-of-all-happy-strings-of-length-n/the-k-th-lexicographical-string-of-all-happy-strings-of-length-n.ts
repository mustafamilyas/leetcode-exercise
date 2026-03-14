function getHappyString(n: number, k: number): string {
    const total = 3 * 2 ** (n - 1);
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