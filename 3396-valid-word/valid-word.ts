const VOWELS = ['a', 'e', 'i', 'o', 'u']
function isValid(word: string): boolean {
    if(word.length < 3) return false;
    let vowel = false, consonant = false
    for(let i = 0; i < word.length; i++) {
        const charCode = word.charCodeAt(i)
        if(charCode >= 48 && charCode <= 57) {}
        else if ((charCode >= 97 && charCode <= 122) || (charCode >= 65 && charCode <= 90)) {
            if(VOWELS.includes(word[i].toLowerCase())) vowel = true
            else consonant = true
        } else return false
    }
    
    return vowel && consonant
};