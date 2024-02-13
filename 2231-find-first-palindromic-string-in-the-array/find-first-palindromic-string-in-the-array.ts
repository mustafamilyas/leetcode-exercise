function firstPalindrome(words: string[]): string {
    return words.find((word)=>isPalindrome(word)) ?? ''
};

function isPalindrome(str: string): boolean {
    for(let i = 0; i < str.length / 2; i++) {
        if(str[i] !== str[str.length - 1 - i]) return false;
    }
    return true;
}