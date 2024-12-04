function canMakeSubsequence(str1: string, str2: string): boolean {
    let i = 0;
    for(let k = 0; k < str1.length && i < str2.length; k++) {
        if(str1[k] === str2[i] || nextChar(str1[k]) === str2[i]) i++;
    }
    return i === str2.length;
};

function nextChar(char: string): string {
    const charCode = char.charCodeAt(0);
    if(charCode < 122) return String.fromCharCode(charCode + 1);
    return 'a'
}