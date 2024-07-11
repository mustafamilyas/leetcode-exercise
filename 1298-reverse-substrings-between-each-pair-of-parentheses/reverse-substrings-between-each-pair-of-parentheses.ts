function reverseParentheses(s: string): string {
    let stack = [], res = "", chars = s.split("");

    for(let i = 0; i < s.length ; i++){
        if(s[i] === '(')
            stack.push(i);
        else if(s[i] === ')'){
            const lastIndex = stack.pop();
            reverse(chars, lastIndex+1, i-1); 
        }
    }
    return chars.filter((ch) => ch !== '(' && ch !== ')').join('');
};

function reverse(arr: any[], l: number, r: number) {
    while(l < r){
        [arr[l], arr[r]] = [arr[r], arr[l]]
        l++, r--
    }
}