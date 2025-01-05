const LETTER_LENGTH = 26;
function shiftingLetters(s: string, shifts: number[][]): string {
    const letterMovements = new Array(s.length + 1).fill(0)
    for(const [start, end, direction] of shifts) {
        if(direction == 1) {
            letterMovements[start]++
            letterMovements[end + 1]--
        } else {
            letterMovements[start]--
            letterMovements[end + 1]++
        }
    }
    let result = '', cumChanges = 0
    for(let i = 0; i < s.length; i++) {
        cumChanges = (cumChanges + letterMovements[i]) % LETTER_LENGTH;
        let nextCharCode = s.charCodeAt(i) + cumChanges
        if(nextCharCode < 97) nextCharCode += LETTER_LENGTH
        else if (nextCharCode > 122) nextCharCode -= LETTER_LENGTH 
        result += String.fromCharCode(nextCharCode)
    }
    return result;
};