const START_CHAR_CODE = 65;
const ALPHABET_LENGTH = 26;

function convertToTitle(columnNumber: number): string {
    let result = '';
    do {
        columnNumber--;
        const remainder = columnNumber % ALPHABET_LENGTH;
        result = String.fromCharCode(START_CHAR_CODE + remainder) + result;
        columnNumber = Math.floor(columnNumber / ALPHABET_LENGTH)
    } while(columnNumber)
    return result;
};